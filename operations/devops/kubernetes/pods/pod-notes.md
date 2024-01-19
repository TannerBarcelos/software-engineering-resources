# Pods

> These notes are tracked using Craft docs. To view this note in a more readable format, visit [all about pods](https://animals-brake-7o7.craft.me/k8s-pods)

### Introduction to Pods

- Pods are a **Kubernetes object** that is the smallest object in the Kubernetes system
- They are responsible for running instances of some application (in the form of a container) on a Kubernetes node
- Docker containers would be ran within a Pod, where the pod represents the application instance i.e a Redis pod, NodeJS pod, etc.
- A pod can have multiple distinct containers within them, but typically there is a 1:1 mapping of container to pod
  - Helper containers i.e a log service sitting alongside an application service, are a typical use case for multiple containers within 1 pod
  - When doing this, every container in the pod runs on the same network in the pod and therefore all communicate via localhost
- Many pods can be added to a single node. When resources become constrained, the scheduler will work to allocate a new Node with N new pods on it defined by the pod configuration manifest

### How to create a pod

> Ensure you have a running Kubernetes cluster (can run one quickly using Docker Desktop)

> For this example, we will run a simple Nginx server. It is important to know that **we won't typically run pods from the cli, but instead use a Yaml manifest file to deploy pods** but it is important to know about pods and how to create them from scratch

**Common Pod Related `kubectl` commands**

```markdown
# Create a new pod

kubectl run nginx --image nginx

# Get all pods in DEFAULT namespace

kubectl get pods

# Output pod information in a different format using -o [OUTPUT_TYPE] output types being wide, yaml, json (wide shows basic internal pod ip, node, status etc.)

kubectl get pods -o wide
kubectl get pods -o yaml
kubectl get pods -o json
```

## Creating Pods using Yaml Configuration Files

> This is the common, most popular and recommended way to create Pods _and all other objects_

```yaml
apiVersion:
kind:
metadata:
spec:
```

- Every yaml configuration file must contain the `apiVersion` , `kind` , `metadata` and `spec` properties
  - If you do not have these, then Kubernetes cannot accept the yaml file, so be sure to aways scaffold out new yaml files with these 4 top-level yaml properties
- Each property contains data that is configuration for the `kind` of object you are defining. Below are the different kinds of objects and the `apiVersion` that correlate

| **kind**   | **apiVersion** |
| ---------- | -------------- |
| Pod        | `v1`           |
| Services   | `v1`           |
| ReplicaSet | `apps/v1`      |
| Deployment | `apps/v1`      |
|            |                |

- the `metadata` property holds metadata information about the pod you are creating as a yaml object. Common values are
  - `name` : this is the pod name. You will see the pod name when running something like `kubectl get pods`
  - `labels` : this is a sub-object that contains labels (tags / identifiable information) that are used as further values which Kubernetes can use to filter, group, select etc.
    - There are some common labels, but a label can be any `key`:`value`

**Nginx pod configuration**

`nginx.yaml`

```yaml
# apiVersion is the version of the kubernetes API that we are going to use that correlates to the object that we are going to create
apiVersion: v1

# Kind is a type of object in kubernetes
kind: Pod

# Metadata for the pod - This is a dictionary of key value pairs where name, labels etc are keys and their values are the values which are also dictionaries
metadata:
  # Name of the pod
  name: myapp-pod
  # Labels are used to identify the pod from other pods or objects and do grouping, filtering etc.
  labels:
    app: myapp

# Spec is the specification of the pod where we define the containers that we want to run in the pod, the image that we want to use, the ports that we want to expose etc
spec:
  # Containers is a list of containers that we want to run in the pod
  containers:
    # Array entry - Dictionary
    - name: nginx-container
      # Image that we want to use for the container
      image: nginx
```

#### Commands to Interact with Kubernetes Using this Yaml file

- Use `kubectl` to send the file to Kubernetes and "deploy" the pod

`kubectl apply -f nginx.yaml`

- See the status of the pod:

`kubectl get pods`

- Describe the whole configuration of a pod

`kubectl describe pods nginx` (`nginx` is the pod name. In any case, we pass the pod name to this command)

- Delete the pod

`kubectl delete pods nginx`

> If using VSCode, a lot of features are enabled for syntax highlighting, auto-complete and completion, hints etc. if you enable the Yaml and Kubernetes extensions

### what about pods that need more configuration for their container?

i.e environment variables, ports, volumes etc. These are all added in the container configuration section of the pod yaml file.

Postgres is a good example, see snippet below

```yaml
apiVersion: v1 # api version of the object
kind: Pod # kind of Kubernetes object
metadata:
  name: postgres #name of the pod
  labels:
    tier: db-tier

# The spec section defines the containers that should be run in the pod.
spec:
  containers:
    - name: postgres
      image: postgres
      # The env section defines environment variables that should be set in the container. For postgres, the Docker image requires the POSTGRES_PASSWORD environment variable to be set at the minimum. See the Docker Hub page for the postgres image for more information.
      env:
        - name: POSTGRES_PASSWORD
          value: 'postgres'
      # The ports section defines the ports that should be exposed on the container. For postgres, the default port is 5432.
      ports:
        - containerPort: 5432
          name: postgres
```
