/*
Most data structures provided in a standard JavaScript environment aren’t very
well suited for persistent use. Arrays have slice and concat methods, which
allow us to easily create new arrays without damaging the old one. But Set, for
example, has no methods for creating a new set with an item added or removed.

Write a new class PGroup, similar to the Group class from Chapter 6, which
stores a set of values. Like Group, it has add, delete, and has methods.

Its add method, however, should return a new PGroup instance with the given
member added, and leave the old one unchanged. Similarly, delete creates a new
instance without a given member.

The class should work for values of any type, not just strings. It does not
have to be efficient when used with large amounts of values.

The constructor shouldn’t be part of the class’ interface (though you’ll
definitely want to use it internally). Instead, there is an empty instance,
PGroup.empty, that can be used as a starting value.
*/

// My Solution:
class PGroup {
    constructor(values) {
        this.values = values;
    }

    static empty() {
        return new PGroup([]);
    }

    add(value) {
        if (!this.has(value)) {
            return new PGroup(this.values.concat([value]));
        }
            return this;
    }

    delete(value) {
        let index = this.values.indexOf(value);
        if (index !== -1) {
            return new PGroup(this.values.filter(i => i !== value));
        }
            return this;
    }

    has(value) {
        let index = this.values.indexOf(value);
        if (index !== -1) {
            return true;
        }
        return false;
    }
}

let a = PGroup.empty().add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
console.log(a.has("b"));
console.log(b.has("a"));

/*
    Eloquent's Solution:
    class PGroup {
        constructor(members) {
            this.members = members;
        }

        add(value) {
            if (this.has(value)) return this;
            return new PGroup(this.members.concat([value]));
        }

        delete(value) {
            if (!this.has(value)) return this;
            return new PGroup(this.members.filter(m => m !== value));
        }

        has(value) {
            return this.members.includes(value);
        }
    }

    PGroup.empty = new PGroup([]);

    let a = PGroup.empty.add("a");
    let ab = a.add("b");
    let b = ab.delete("a");

    console.log(b.has("b"));
    console.log(a.has("b"));
    console.log(b.has("a"));
*/