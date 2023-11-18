// Purpose: JSONify an object.
export const jsonify = (obj: any) => JSON.stringify(obj, null, 2);
