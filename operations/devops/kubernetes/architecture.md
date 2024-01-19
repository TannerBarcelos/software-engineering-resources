# Kubernetes Architecture and Components Overview

#### Review - What is a Cluster?

> A cluster is a group of interconnected computers or servers that work together to provide a shared pool of resources and services.

> Clustering technology is used to improve system availability, scalability, and reliability.

**In the context of Kubernetes, a Kubernetes cluster is a collection of nodes that work together to form a distributed system for managing containerized workloads and services.**

![Image.png](https://res.craft.do/user/full/23a94566-d418-41a0-9075-ac543852aabd/doc/DDD5BAAC-66EF-4768-A20A-D3EFCCC53AC6/FF4CD37B-26E8-4754-8A2D-B537AAB92217_2/WGaPtgwSHmd88mfKoJbQjfVdnf7MfjbLehEBWYCkx7Ez/Image.png)

#### Control Plane (on leader node)

> **The control plane is housed on the leader node.**

- **Made up of 4 core components**
  - **API Server**
    - The API server is a core component of the Kubernetes control plane responsible for providing the interface to manage and control the cluster.
    - When we interface with a cluster using `kubectl` , we are communicating with the api-server. The api-server in turn will issue commands to each node as it has communication with them.
    - The API server acts as a gateway for communication between the control plane components and the nodes. this means that the api-server facilitates all communication between nodes and the other components in the leader node
    - When a change occurs in the desired state, the API server updates the state in etcd.
    - Nodes have a component called Kubelet, which communicates with the API server to get information about the desired state, and it takes actions to ensure the actual state aligns with the desired state.
  - **Cluster Scheduler**:
    - The cluster scheduler is a core component of the Kubernetes control plane that is responsible for scheduling and assigning workloads to nodes based on available resources and constraints.
    - The Scheduler is responsible for selecting a suitable node for a Pod to run on. It interacts with the API server to update the assignment of Pods to nodes.
    - Like the Controller Manager, the Scheduler does not communicate directly with the nodes. It communicates with the API server, and the API server takes care of updating the state on the nodes.
  - **Controller Manager or Controllers**:
    - The Controller Manager watches the state of the cluster by querying the Kubernetes API server. When it detects a difference between the desired state (as defined by controllers) and the actual state, it takes corrective actions. It knows state changed because this api call to the server will check etcd to see if a change in the state occurred
    - The Controller Manager does not communicate directly with the nodes; it relies on the API server to propagate changes to the nodes.
  - **etcd**:
    - etcd is a distributed key-value store that is used by Kubernetes to store and manage the cluster's configuration data / overall state of the cluster.
    - It serves as the "brain" of the control plane, ensuring consistency and providing a reliable and highly available state for the entire cluster.
    - etcd, the distributed key-value store, stores the configuration data and current state of the cluster. All components in the control plane, including the API server, interact with etcd to read and write data.
    - Nodes do communicate with etcd but indirectly. The API server on each node communicates with etcd to retrieve information about the desired state of the cluster.
  * _Cloud Controller Manager_

_(optional if using a managed cloud provider like GKE or ECS)_

- The control plane's components make global decisions about the cluster including
  - Scheduling new pod creation and allocation to nodes in the cluster
  - Responding to cluster events
  - exposing the API server
  - managing / controlling cluster state
  - deployment
  - configuration
  - operations
  - storage
- Redundancy is key to fault tolerance and high availability. To create a cluster that is not susceptive to risk, you can mitigate any such risk by adding multiple master nodes

#### Follower Nodes

> A node is a VM or a physical machine that serves as a worker in a Kubernetes cluster. The workers will contain the k8s software it needs to communicate with the clusters control plane

- **Made up of 2 core components**
  - **Kubelet**
    - Agent that runs on every node _(not a pod)_ for managing the node and communicating with the leader so it is aware of the cluster and the leader is aware of it.
    - This communication happens via API calls between the kubelet and the api server on the leader
  - **Kube-Proxy**
    - maintains network rules on every node _(not pod)_.
    - These network rules allow network communication to your Pods from network sessions inside or outside of your cluster.
- **Nodes must also have a container runtime**
  - Allows the ability to create and run containers within pods on a node in the cluster
  - Normally Docker is the runtime
- A production grade K8s cluster should have at least >= 3 nodes in the cluster for high availability.
- Responsible for creating pods that will run container applications and work on behalf of the master nodes desired state

[Kubernetes Components](https://kubernetes.io/docs/concepts/overview/components/)
