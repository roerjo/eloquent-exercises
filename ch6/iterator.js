/*
Make the Group class from the previous exercise iterable. Refer back to the
section about the iterator interface earlier in the chapter if you aren’t
clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the
iterator created by calling the Symbol.iterator method on the array. That
would work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified
during iteration.
*/

// My solution:

class Group 
{
  constructor()
  {
    this.group = [];
  }
  
  add(value)
  {
  	if (this.group.indexOf(value) === -1) {
      this.group.push(value);
    }
  }
  
  delete(value)
  {
    let index = this.group.indexOf(value);
    
  	if (index !== -1) {
      this.group.splice(index, 1);
    }
  }
  
  has(value)
  {
  	if (this.group.indexOf(value) !== -1) {
      return true;
    }
    
    return false;
  }
  
  static from(collection)
  {
    let group = new Group();
    
    for (let value in collection) {
      group.add(collection[value]);
    }

    return group;
  }
}

class GroupIterator {
  constructor(group) {
    this.value = 0;
    this.group = group.group;
  }

  next() {
    if (this.value == this.group.length) return {done: true};
    
    let current = {
      value: this.group[this.value],
      done: false
    }
    
	this.value++;
    return current;
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
};

/*
    Eloquents Solution:
    class Group {
        constructor() {
            this.members = [];
        }

        add(value) {
            if (!this.members.includes(value)) {
            this.members.push(value);
            }
        }

        delete(value) {
            this.members = this.members.filter(v => v !== value);
        }

        has(value) {
            return this.members.includes(value);
        }

        static from(collection) {
            let group = new Group;
            for (let value of collection) {
            group.add(value);
            }
            return group;
        }

        [Symbol.iterator]() {
            return new GroupIterator(this);
        }
    }

    class GroupIterator {
        constructor(group) {
            this.group = group;
            this.position = 0;
        }

        next() {
            if (this.position >= this.group.members.length) {
            return {done: true};
            } else {
            let result = {value: this.group.members[this.position],
                            done: false};
            this.position++;
            return result;
            }
        }
    }
*/

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
 }