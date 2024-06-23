const arr = [1, 5, 7, 9];
const min = Math.min(...arr);
console.log(min); // Output: 1

function createCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count
    };
}

const counter = createCounter();
console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.decrement()); // Output: 1


function findElementByClass(root, className) {
    if (root.classList && root.classList.contains(className)) {
        return root;
    }
    for (let child of root.children) {
        const found = findElementByClass(child, className);
        if (found) {
            return found;
        }
    }
    return null;
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
