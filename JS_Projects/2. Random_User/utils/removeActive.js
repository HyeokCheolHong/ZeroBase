// Active를 제거하는 JS

export default function removeActive(items) {
    items.forEach((btn) => btn.classList.remove('active'));
}