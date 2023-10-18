export const hasOperationName = (req: any, operationName: string) => {
  const { body } = req;
  return (
    Object.prototype.hasOwnProperty.call(body, 'operationName') &&
    body.operationName === operationName
  );
};

// Alias query if operationName matches
export const aliasQuery = (req: any, operationName: string) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Query`;
  }
};

// Alias mutation if operationName matches
export const aliasMutation = (req: any, operationName: string) => {
  if (hasOperationName(req, operationName)) {
    req.alias = `gql${operationName}Mutation`;
  }
};

export const testGraphqlUrl = 'http://mocked/graphql';
