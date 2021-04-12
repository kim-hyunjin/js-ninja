 interface Ninja {
    id: number;
    fn: () => void;
 }

const store = {
    nextId: 1,
    cache: new Map(),
    add: (ninja: Ninja): boolean => {
        if (!ninja.id) {
            ninja.id = store.nextId++;
            return !!(store.cache.set(ninja.id, ninja.fn));
        }
        return false
    }
};

export {Ninja, store}