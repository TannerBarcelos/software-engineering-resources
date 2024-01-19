# Replication Sets (Previously Replication Controller)

## Introduction to Controllers and a Brief on the Replication Controller (now named Replica Set)

- Kubernetes is an open-source container orchestration platform that allows developers to automate the deployment, scaling, and management of containerized applications. Within Kubernetes, controllers play a vital role in maintaining the desired state of the application by continuously monitoring and adjusting the number of running instances. One of the most important controllers in Kubernetes is the Replication Controller.
- A Replication Controller ensures that a specified number of identical pods are running at all times. It achieves this by constantly monitoring the running pods and automatically creating or terminating pods as necessary to match the desired state. This helps in providing high availability for applications by automatically replacing any failed or terminated pods with new ones. Additionally, it allows for seamless scaling of the application by increasing or decreasing the number of pods based on the current demand. Overall, the Replication Controller plays a crucial role in ensuring the stability and scalability of applications running in Kubernetes clusters.

> **Controllers in Kubernetes are responsible for maintaining the desired state of the cluster by making necessary changes to the system to bring it into the desired state. They are managed by the controller-manager component in the control plane**

- Along with the Replication Controller, Kubernetes provides various other types of controllers, such as Deployment, StatefulSet, and DaemonSet. Each controller has a different purpose and offers different functionalities to manage various aspects of the cluster. These controllers work together to ensure that the applications are running reliably, efficiently, and at scale within the Kubernetes environment.
- By continuously monitoring the pod's state and making necessary adjustments, replication controllers ensure high availability and allow for seamless scaling of applications. Kubernetes offers a variety of controllers, each serving a specific purpose, to manage different aspects of the cluster and provide an efficient and reliable container orchestration platform.

## Replication Controller (now named Replica Sets)

- The replication controller is a specific controller that continuously monitors that all pods are running and replicated across each Node in the cluster
  - If you are running a single-node cluster i.e Minikube, it will ensure that the pod(s) are concisely running and always ensuring the desired state of every pod running matches the current state, and if not, it will work to remediate it
- The replication controller spans across all the nodes in a cluster and enables load balancing of pods across all the nodes

> > **Replication controllers are considered an older term and now, replication management is done by replica sets, therefore, we will stick to Replica Set terminilogy going forward**

### Replication Set _(controller)_ configuration syntax

- Remember in the [Pods](craftdocs://open?blockId=40F4F932-9D9E-438D-8CA5-99D3BCDB7A48&spaceId=23a94566-d418-41a0-9075-ac543852aabd) document, I stated that [Every yaml configuration file must contain the apiVersion , kind , metadata and spec properties no matter if creating Pods, ReplicaSets, or any other object / resource](craftdocs://open?blockId=B31DA24B-A8B4-42D6-9DDA-A56C3C09B624&spaceId=23a94566-d418-41a0-9075-ac543852aabd). this means, that yes, replication sets must have the 4 foundational top-level Yaml values as well

```yaml
apiVersion:
kind:
metadata:
spec:
```

> Remember, every resource has an `apiVersion` as stated [Pods](craftdocs://open?blockId=40F4F932-9D9E-438D-8CA5-99D3BCDB7A48&spaceId=23a94566-d418-41a0-9075-ac543852aabd) document. This means that yes, replica sets follow the same. Let's re-visit the table from the Pods document

| **kind**   | **apiVersion** |
| ---------- | -------------- |
| Pod        | `v1`           |
| Services   | `v1`           |
| ReplicaSet | `apps/v1`      |
| Deployment | `apps/v1`      |

- As we see here ReplicaSet objects contain the `apps/v1` api version

Below is a working `ReplicaSet` manifest file that defines a replica set of 3 nginx pods

> file name is `rs-definition.yaml`

```yaml
apiVersion: apps/v1
kind: ReplicaSet
# metadata rules are the same as pods and other k8s objects
metadata:
  name: myapp-replicaset
  labels:
    app: myapp
    type: front-end
spec:
  # Pod template definition
  template:
    metadata:
      name: myapp-pod
      labels:
        app: myapp
        type: nginx-pod
    spec:
      containers:
        - name: nginx-container
          image: nginx
  replicas: 3
  selector:
    matchLabels:
      type: nginx-pod
```

Let's break down each property of this file

- the apiVersion, kind, metadata and spec top-level entries are required as we know, we will not explain them
- Notice that `spec` is different, though
  - Instead of supplying a list of containers for the Pod specification, we provide a dictionary keyed by `template` .
  - This key means "the pod template", which is a pod definition template.
    - Notice how it directly matches a Pod spec minus apiVersion and kind. This means that template is a definition of a pod and we can easily remember the syntax!
  - We also have this new `replicas` property.
    - This property defines how many pods, defined in the template, should be replicated on the cluster.
    - If any replica dies, the controller-manager and replica-set work to bring back new pods so that the desired state of 3 pods is matched with the current state
  - Lastly, we have the `selector` property
    - The selector property is used to tell the `ReplicaSet` object what pods need to be selected to replicate
    - ReplicaSet and Pods are disparate objects which means that a ReplicaSet has no way to know what pod(s) to replicate if we do not supply it that information
    - Therefore, we provide a `matchLabels` property which is used just like it sounds: Match the given label key/value pair to the label (if exists) on a pod, in this case, the label created in the template in the same file
    - This means, `matchLabels` will search the labels **in the** `labels` **dictionary in the pod template** , not the ReplicaSet metadata dictionary

## What happens when we apply this manifest to the cluster?

`kubectl apply -f rs-definition.yaml`

- This applies the file and creates a ReplicaSet and the pods we requested in the template field.

To see the pods, run the following:

`kubectl get pods`

> > `k get pods` is equivalent to `kubectl get pods` . I simply created an alias on my mac using `export alias k=kubectl`

![Image.png](https://res.craft.do/user/full/23a94566-d418-41a0-9075-ac543852aabd/doc/AA2F829E-5B76-4C78-A730-8238DDE9578D/8B3BE368-AA35-4570-935C-245266F82451_2/cKkK9pRhSVyhKn1sPDTFgN4HJyBxorFAlcFqnYEb3PIz/Image.png)

We can also see the ReplicaSet that was created using the following command:

`kubectl get replicasets`

![Image.png](https://res.craft.do/user/full/23a94566-d418-41a0-9075-ac543852aabd/doc/AA2F829E-5B76-4C78-A730-8238DDE9578D/7D145613-AAC8-4DF9-87BC-69E0E93996DD_2/A57Cm4RuEKyX66zICcYspc5JQwMRHDRvuElOyGoOscEz/Image.png)

#### What happens when we delete the pods when we no longer need them?

- Well remember, ReplicaSet are responsible for replicating desired pods across a cluster and working on your behalf to always keep them up and running in the desired state
- If we delete the pods that are selected in a `ReplicaSet` you will see that the Pods immediately spin back up and don't delete\*. This is the whole purpose of the `ReplicaSet` ! It is to maintain a consistent, highly available, fault-tolerant deployment of the software.
- **To delete the pods, we must delete the `ReplicaSet`**

`kubectl delete replicaset myapp-replicaset`

> Try deleting a pod that's running under the `ReplicaSet` and then immediately run `kubectl get replicatsets` and notice the `DESIRED` and `CURRENT` values. They will differ temporarily and then eventually match if the Kubernetes system can successfully get the desired state to match the current or actual state

## So why Labels and Selectors in Kubernetes?

- Labels and selectors are essential concepts in Kubernetes that enable controllers like the Replication Controller (now named Replica Set) to function effectively.
- Labels are key-value pairs attached to Kubernetes objects, such as pods, nodes, and services. They are used to identify and categorize these objects based on specific attributes or characteristics. Labels can be added, modified, or removed at any time, providing flexibility and dynamic management of resources.
- Selectors, on the other hand, are used to specify rules for selecting objects based on their labels. Controllers like the Replica Set use selectors to identify and target specific pods that need to be replicated or managed. By using selectors, controllers can ensure that the desired number of pods are always running and replicated across the cluster.
- Labels and selectors have several benefits in Kubernetes:

1. Grouping and categorization: Labels allow for the organization and categorization of objects based on various attributes. This enables efficient management and control over multiple objects within a cluster.
2. Dynamic management: Labels provide a flexible way to add or remove resources dynamically. Objects can be easily filtered and manipulated based on their labels, making it easier to handle changes in the cluster.
3. Replication and scaling: Controllers like the Replica Set use labels and selectors to identify pods that need to be replicated. This enables automatic scaling and replication of pods based on the specified rules and desired state.
4. Service discovery and load balancing: Labels and selectors are used by Kubernetes to facilitate service discovery and load balancing. Services can be easily associated with pods using labels, allowing for efficient routing and distribution of requests.

## How to Scale up or down replica sets

What happens if we add more Nodes to the cluster and want to scale up our pod amount? Or what if we lose a node and we can no longer replicate the original # of pods?

Well, it's simple, we can scale the replicas !

**2 ways to do so**

1. The obvious is to change the `replicas` property in the `ReplicaSet` manifest, however this is less common
2. Provide a replica count to a new command called `kubectl scale` which will take an input `ReplicaSet` manifest and scale up/down the amount of pods. See the command below. The only thing to remember is the yaml file will not update, so be aware of that

`kubectl scale --replicas=10 -f rs-definition.yaml`

This will now create 10 pods!

![Image.png](https://res.craft.do/user/full/23a94566-d418-41a0-9075-ac543852aabd/doc/AA2F829E-5B76-4C78-A730-8238DDE9578D/19D01E35-FA2A-4646-9865-2832B65B63BD_2/DmUWcgME6dNrIRi8KSmxZnjLWIWfyBoOquI5Hqj1Ra4z/Image.png)

So cool!

## replica-set command reference

> All file names will match the filename of the code block earlier in this doc `rs-definiton.yaml`

| Command                                                                 | Explanatio                                                                                                                                                     |
| ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `kubectl create -f [file].yaml`                                         | Creates a replicaset                                                                                                                                           |
| `kubectl delete replicaset [replicaset_name_from_metadata]`             | Deletes a replicaset, and subsequently every pod                                                                                                               |
| `kubectl delete -f rs-definition.yaml`                                  | Easier way to delete; Just run the normal `kubectl delete` command and pass it the manifest of the obejct / resource you are deleting. It will know what to do |
| `kubectl scale --replicas=[replica_count] -f rs-definiton.yaml`         | Scales the pods to `replica_count` amount                                                                                                                      |
| `kubectl scale --replicas=[replica_count] replicaset [replicaset_name]` | Scales the replicaset by replicaset name                                                                                                                       |
| `kubectl edit replicaset [replicaset_name]`                             | Opens a `vi` editor to edit the replicaset in a temp yaml file                                                                                                 |
