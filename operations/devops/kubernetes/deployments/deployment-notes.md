# Deployments

- Kubernetes deployments are a fundamental concept in managing containerized applications. A deployment in Kubernetes is a resource object that describes the desired state of a replica set, ensuring that the specified number of pods are running and available at all times. It allows for the easy scaling and management of application instances, ensuring high availability and fault tolerance.
- When creating a deployment, you define the desired number of replicas, the container image to use, and any additional configurations or resources required. Kubernetes then takes care of automatically creating and managing the pods based on these specifications. If a pod goes down or a node fails, Kubernetes will automatically create new pods to maintain the desired state.
- Deployments also support rolling updates, which allow for seamless updates of the application without any downtime. By gradually replacing old pods with new ones, rolling updates ensure that the application remains available during the update process. This feature is essential in production environments where a continuous delivery pipeline is in place.

> So again, like replica sets contain pod-specs we can copy/paste, Deployments contain `ReplicaSet` specs which we can also copy/paste. This is an easy way to remember the syntax!

Let's take a look at a Deployment manifest

`deployment.yaml`

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-nginx-deployment
  labels:
    app: nginx
    tier: frontend
spec:
  # Pod template
  template:
    metadata:
      name: nginx
      labels:
        app: my-app
    spec:
      containers:
        - name: nginx
          image: nginx
  selector:
    matchLabels:
      app: my-app # remember it is matching a label of the pod template, not the parent (this Deployment)
  replicas: 3
```

Apply this file `kubectl apply -f deployment.yaml` and then check the pods `kubectl get pods` or run other commands from reference below

> It looks just like a `ReplicaSet` only that the `kind` changed. This is true!

> Deployments allow for full replication features but also managing rolling updates

> The `spec` field on the yaml is the exact same as the `spec` of a `ReplicaSet` . That's a way to remember the syntax

## Updates / Rollouts and Rollbacks

- When a deployment is triggered, a Rollout is invoked, which means it rolls-out a new revision of your changes (if any) to the cluster
  - If no changes were made, no new rollout history entry is made and it uses the latest
  - This allows for roll-backs, which are ways to go back to previous versions of your deployment history if issues are faced when a new deployment is made
- You can track the rollout history for every new rollout when deployment changes are made using the rollout history command (See below)
- You can also see rollout status when a deployment is triggered using rollout command (See below)

**There are 2 deployment strategies**

1. Destroy all pod instances, then deploy all new pods - **This is called the re-create strategy AND CAUSES DOWNTIME, therefore not recommended**
2. **Rolling Update** - This has no downtime and it creates a new pod, then deletes the old, and continues to roll out every pod in the replica count and provides 0-downtime to users
   - As we know, we can update yaml file and re-apply to make changes OR we can edit in-place using a temp vim editor. By doing the latter, we know it does not update the manifest, and is therefore only good for debugging. Below is the in-place command to edit if needed, to edit image for a given pod spec of a deployment

`kubectl set image deployment/[deployment_name] containerName:[new_image_name]`

`set [proprty] is the generic usecase`

## Deployment command reference

> All file names will match the filename of the code block earlier in this doc `deployment.yaml`

| Command                                                           | Explanation                                                                                                                                                    |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `kubectl create -f [file].yaml`                                   | Creates a deployment (`kubectl create` is a generic CLI command)                                                                                               |
| `kubectl delete deployment [deployment_name_from_metadata]`       | Deletes a deployment, and subsequently every pod and replicaset                                                                                                |
| `kubectl delete -f deployment.yaml`                               | Easier way to delete; Just run the normal `kubectl delete` command and pass it the manifest of the obejct / resource you are deleting. It will know what to do |
| `k rollout status deployment/[deployment_name_from_metadata]`     | WHenever a new deployment is made, it invokes a rollout of the new infra. TO check the status, and if it failed or not, run this command                       |
| `k rollout history deployment/[deployment_name_from_metadata]`    | This shows the history of rollouts for the specified deployment                                                                                                |
| `kubectl rollout undo deployment/[deployment_name_from_metadata]` | This is how we can rollback changes made to a current deployment that might be broken                                                                          |
| `kubectl edit deployment [deployment_name]`                       | Edit the deployment in a vi editor                                                                                                                             |

> Note that you can always prefix a resource with `resource_type/name` or the usual `resource name` i.e `kubectl get deployments` or `kubectl get deployments/my-nginx-deployment`

> You can see above as well.

## Deployments are pretty straight-forward so this is all the content we need. They are basically a way to create pods and replicasets in 1
