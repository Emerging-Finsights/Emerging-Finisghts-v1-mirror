
APPID = 'd22d9354-40fb-4d32-be8f-0d8417028d65'

/**
 * Helper function to retrieve a dom node of a child with a certain id
 * @param {*} rootNode The node that will have its children searched for the given childID
 * @param {*} childID The id field of the child to be searched for  
 * @returns The child with the given id
 */
function findChild(rootNode, childID)
{
    for (let index = 0; index < rootNode.children.length; index++) {
        const element = rootNode.children[index];
        
        if(element.id === childID) { 
            return element
        }

        if ((recursive_result = findChild(element, childID)) != null) {
            return recursive_result
        }
    }

    return null
}