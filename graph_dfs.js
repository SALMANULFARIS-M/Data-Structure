class Graph{
    constructor(){
        this.list = {}
    }
    addVertex(key){
        if(!this.list[key]){
            this.list[key] = new Set()
        }
    }
    addEdges(vertex,edge){
        if(!this.list[vertex]){
            this.addVertex(vertex)
        }
        if(!this.list[edge]){
            this.addVertex(edge)
        }
        this.list[vertex].add(edge)
        this.list[edge].add(vertex)
    }
    removeEdge(vertex,edge){
        this.list[vertex].delete(edge)
        this.list[edge].delete(vertex)
    }
    removeVertex(vertex){
        if(!this.list[vertex]){
            return null
        }
        for(let values of this.list[vertex]){
            this.removeEdge(vertex,values)
        }
        delete this.list[vertex]
    }
    display(){
        for(let vertex in this.list){
            console.log(vertex + ' -> '+[...this.list[vertex]]);
        }
    }
    dfs(vertex){
        let visited = new Set()
        this.dfsHelper(vertex,visited)
    }
    dfsHelper(vertex,visited){
        visited.add(vertex)
        console.log(visited);
        for(let vertices of this.list[vertex]){
            if(!visited.has(vertices)){
                this.dfsHelper(vertices,visited)
            }
        }
    }
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdges('A','C')
graph.addEdges('A','B')
graph.addEdges('C','A')

graph.display()
graph.dfs('A')