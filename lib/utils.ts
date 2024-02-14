export function formatEnumValue(enumValue: string) {
    return enumValue
        .toLowerCase()
        .replace(/_/g, " ")
        .replace(/\b(\w)/g, (char) => char.toUpperCase());
}