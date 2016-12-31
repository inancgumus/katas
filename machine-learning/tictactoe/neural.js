// feed-forward neural network
// with 128 hidden neurons
class Net {
  constructor(sizesOrNodes) {
    let sizes, nodes

    if (Array.isArray(sizesOrNodes) && Array.isArray(sizesOrNodes)) {
      sizes = this.getSizes(sizesOrNodes)
    } else {
      sizes = sizesOrNodes
    }

    this.nodes = sizes.map((size, i) => {
      let layer = [...Array(size)]
                    .map((_, j) => this.makeNode(i, j, sizes, nodes))
    })
  }

  getSizes(nodes) {
    // layer.length is the number of nodes in that layer
    return nodes.map(layer => layer.length) 
  }

  makeNode(layerIndex, index, sizes, nodes) {
    // initialize: nothing in there
    let node = {
      input: 0
    }

    // threshold is the limit
    // if it reaches to the threshold
    // it propagates to the next layer
    if (layerIndex < sizes.length - 1) {
      // each node is connected to every other node in the next layer
      node.threshold = (typeof nodes === 'undefined')
                        ? 1
                        : nodes[layerIndex][index].threshold
    }

    node.weights = typeof nodes === 'undefined'
                    ? new Array(sizes[layerIndex + 1])
                    : nodes[layerIndex][index].weights

    return node
  }
}
