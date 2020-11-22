// @flow

import { Schema, Model, type MongoId } from 'mongoose';

import { graphqlConnection } from '../connections';

const StoredOperationSchema = new Schema({
  operationId: {
    type: String,
    required: true,
    unique: true,
  },
  text: {
    type: String,
    required: true,
  },
});

export type StoredOperationType = {
  +operationId: string,
  +text: string,
  ...
};

class StoredOperation extends Model {
  _id: MongoId;
  operationId: string;
  text: string;
  static async getOperationText(operationId: string): Promise<?string> {
    const operation = await this.findOne({ operationId });
    return operation?.text;
  }

  static async addOperations(operations: $ReadOnlyArray<StoredOperationType>): Promise<this> {
    const operationIds = operations.map((i) => i.operationId);
    const existingOperations = await this.find({
      operationId: { $in: operationIds },
    });
    const existingOperationIds = existingOperations.map((i) => i.operationId);
    const operationsToAdd = operations.filter((i) => !existingOperationIds.includes(i.operationId));

    return this.create(operationsToAdd);
  }
}

StoredOperationSchema.loadClass(StoredOperation);

const storedOperation: Class<StoredOperation> = graphqlConnection.model(
  'persistedquery',
  StoredOperationSchema,
);

export default storedOperation;
