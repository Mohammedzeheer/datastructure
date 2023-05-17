class hashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key, value) {
        const index = this.hash(key)
        const bucket = this.table[index]

        if (!bucket) {
            this.table[index] = [[key, value]]
        }
        else {
            const sameKey = bucket.find((item) => item[0] === key)

            if (sameKey) {
                sameKey[1] = value
            }
            else {
                bucket.push([key, value])
            }
        }
    }

    get(key) {
        const index = this.hash(key)

        const bucket = this.table[index]
        if (bucket) {
            const sameKey = bucket.find((item) => item[0] === key)

            if (sameKey) {
                return sameKey[1]
            }
        }
        return undefined
    }

    remove(key) {
        const index = this.hash(key)

        const bucket = this.table[index]

        if (bucket) {
            const sameKey = bucket.find((item) => item[0] === key)
            if (sameKey) {
                bucket.splice(bucket.indexOf(sameKey), 1)
            }
        }
    }

    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

const table = new hashTable(50)

table.set("name", "ridin")
table.set("mane", "mizhi")
table.set("district", "kannur")
table.set("age", 20)

// table.display()
console.log("------------------------");
// console.log(table.get("age"));
table.remove("age")
table.display()
// console.log(table.get("age"));