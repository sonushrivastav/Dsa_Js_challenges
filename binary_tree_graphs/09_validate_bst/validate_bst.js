class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

function isValidBST(root){
    function isValidSubstree(node,min,max){
        if(!node) return true
        if(
            (min !== null && min.value <=min) || (max !== null && node.value >= max)
        ){
            return false
        }

        return (
            isValidSubstree(node.left, min,node.value) &&
                isValidSubstree(node.right, node.value,max)
        )
    }

    return isValidSubstree(root,null,null)
}

module.exports = {
    Node,
    isValidBST,
}