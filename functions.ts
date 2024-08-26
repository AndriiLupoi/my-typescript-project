// Функція з параметром за замовчуванням для числа
function printMessage(message: string, repeatCount: number = 1): void {
    for (let i = 0; i < repeatCount; i++) {
        console.log(message);
    }
}

// Виклики функції з передачею числа і без
printMessage("Hello, World!");  // Використовує значення за замовчуванням для repeatCount
printMessage("Hello, TypeScript!", 3);  // Передане число використовується для repeatCount
