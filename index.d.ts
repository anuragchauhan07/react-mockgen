export type DummyFieldType = 'text' | 'boolean' | 'number' | 'image';
export type DummyModel = { [key: string]: DummyFieldType };

/**
 * Generate dummy data based on a model schema.
 * @param model The model schema, e.g. { name: 'text', age: 'number', avatar: 'image', isActive: 'boolean' }
 * @param count Number of dummy objects to generate
 * @returns Array of dummy data objects
 */
export function generateDummyData(model: DummyModel, count: number): Array<Record<string, any>>; 