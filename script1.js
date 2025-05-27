async function executeSequentially(tasks) {
    for (const task of tasks) {
        await task();
    }
}

// Example usage
executeSequentially([
    () => new Promise(res => setTimeout(() => { console.log("Task 1"); res(); }, 1000)),
    () => new Promise(res => setTimeout(() => { console.log("Task 2"); res(); }, 3000)),
]);
