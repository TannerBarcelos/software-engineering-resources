# Services

> Very important topic. Services allow communication between pods to create a full-stack system of different services that communicate with each other amongst the K8s cluster

- Services enable communicate between various components within and outside of application pods on the cluster
- Maybe we have the following:
  - Pods for frontend
  - Pods for rest api
  - Pods for database
- To connect them together so the frontend can call apis exposed in the rest pods, and then the rest pods calling the db pods, we use services to open up the communications between all these components
- Service spec spans the whole cluster, so there are no changes needed when new pods are created or destroyed. You simply need the IP address of the Node you are trying to run the app on, and hit it with the port that is exposed! (in the case of Minikube or Docker Desktop K8s, it is just localhost since it is our machine), but if it was an AWS EKS server, for example, it could be `aws.server.blah.1234:300080` etc.
- When pods die, new IPs are created for the Pods that come back up, therefore IP addresses of pods **Are not static**

## Accessing the web-server / content of an application in a Pod in the cluster

- By default, we cannot access anything in the cluster from our machines as they are all on a private network.
- We use Services to unlock this capability and "open up" or "forward" the port to the outside world

### Types of Services

**NodePort**

- Makes internal pods accessible to the outside world
- Maps a port on the node to a port on the pod so we can hit the IP:PORT of the node and get access to the application in some pod
- A `NodePort` service will contain a value for the `targetPort` of the pod and its own `port` which will be exposed as a sort of virtual server that sits in front of the pod to enable communication by us-node-pod. The `NodePort` value will be the actual port of `IP:PORT` that we hit to access the content of the pod
- Good, but you need to have the IP address:port for every Node you are exposing, therefore as the cluster grows, you need to track all IP addresses and share them. So, it is a lot to keep track of. `LoadBalancer` is an improvement, allowing a single URL!! for all services

```yaml
apiVersion: v1
kind: Service
metadata:
  name: service
spec:
  type: NodePort
  ports:
    - port: 80 # This is the port that the service will listen on i.e http://localhost:80 and send traffic to the targetPort
      targetPort: 80 # This is the port that the container exposes and the service will send traffic to i.e Nginx is listening on port 80, so we will send traffic to port 80
      nodePort: 30080 # This is the port that will be exposed on the nodes that we will hit, i.e http://localhost:30080 (port range is 30000-32767)
  # This is the selector that will match the labels in the deployment / pod template of the app that we want to expose, in this case nginx
  # If we are selecting from a pod.yaml, then it is a label in the metadata, else it is the label in the pod template of the deployment
  selector:
    app: nginx-webserver # see the `deployment.yaml` pod template. This is the app label defined there.
```

Apply this configuration (make sure the pods are deployed first by applying a pod definition or a Deployment)

`kubectl apply -f service.yaml`

> Once this is done, you can go to `localhost:NODE_PORT_VALUE` and see Nginx! so cool

![Image.png](https://res.craft.do/user/full/23a94566-d418-41a0-9075-ac543852aabd/doc/CB8B0536-2CB5-4B7E-AF65-9D11E065C33C/73DFEEEE-5078-4684-B914-1D557A8603D1_2/rx0ALmHJDZoSCvJncaTApHBBv7qsA4HMXylypr6A1ewz/Image.png)

**ClusterIp**

- Enables communication within the cluster itself so different services (like web ui, backend, other microservices can talk to each other with simple localhost:PORT calls)
- Makes it very easy to deploy microservices architecture i.e React app, Go Rest API, Redis services for caching and Postgres DB
- ClusterIP is a type of service in Kubernetes that allows communication between different components within the cluster. It acts as a single interface for all communication and enables easy deployment of microservices architecture. By using ClusterIP, we can connect different pods together, like frontend, REST API, and database pods, so they can communicate with each other. The IP address of the ClusterIP remains the same even if pods are created or destroyed. This makes it convenient to access the services within the cluster by simply knowing the IP address and port.
- This service does not expose anything to the outside world like in `NodePort` . We still need NodePort or LoadBalancer to be able to access it.
  - It simply enables internal communication to be easier by mapping any IPs under the label and the port behind the scenes so our code can simply keep localhost calls internally

```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx
spec:
  type: ClusterIP
  selector:
    app: nginx-webserver # select the nginx pods
  ports:
    - port: 80
      targetPort: 80 # Port that the pod definition listens on, in this case, Nginx pod
```

**LoadBalancer**

- Much more used / recommended today
- Like `NodePort` but it knows of every node in the cluster and can send internal requests to any underlying node/pod.
- LoadBalancer exposes one port/url which anyone can access, and it will take that and forward them off to whatever we are trying to access
- Much more flexible / maintainable than NodePort
- Only used in cloud environments / multi-node setups, therefore if doing just a local project on Minikube or Docker Desktop for K8s practice, just use NodePorts
- We can simulate LB and use it though if we enable tunneling on Minikube

```yaml
apiVersion: v1
kind: Service
metadata:
  name: service
spec:
  type: LoadBalancer
  ports:
    - port: 80
      targetPort: 80
      nodePort: 30033
  selector:
    app: nginx-webserver
```

> Note it is the same as NodePort except for type

## Service Command Reference

| Command                                     | Explanation                       |
| ------------------------------------------- | --------------------------------- |
| `kubectl get svc` of `kubectl get services` | Get's all services in the cluster |
