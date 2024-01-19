# Introduction to K8s

#### What Kubernetes can do for a user

With modern web services, users expect applications to be available 24/7, and developers expect to deploy new versions of those applications several times a day. Containerization helps package software to serve these goals, enabling applications to be released and updated without downtime. Kubernetes helps you make sure those containerized applications run where and when you want, and helps them find the resources and tools they need to work. Kubernetes is a production-ready, open source platform designed with Google's accumulated experience in container orchestration, combined with best-of-breed ideas from the community.

> Kubernetes is a portable, extensible open source platform for managing containerized workloads and services. In essence, Kubernetes is a container orchestration and automation tool

**Deployment Models Over Time**

![Drawing](https://res.craft.do/user/preview/23a94566-d418-41a0-9075-ac543852aabd/doc/0F985613-9487-4B5B-9DC8-B18A4CFEA548/F8DEA437-709A-49A0-A20F-C701CBA3A8A3_1/19GZxiNLsgOuhtWLAv1YRNPqreILP5sy2rl7SjI5yMEz/Drawing.jpg)

#### Traditional Deployments

- Very popular for a very long time companies and developers ran applications on physical servers (bare metal). _At Visa we have a lot of this_
- Given everything is deployed manually, there is no way to resource allocate on-demand for higher or lower throughput on any part of the system i.e If our deployed app all of a sudden got 1mil users and the app was deployed on bare metal, the server would crash unless we added more CPU, RAM etc. manually. Now of course this can be done but what if the administrator in across the world away from that server on a vacation and they need this asap? This is a huge issue and this traditional deployment model is hard to maintain.
- Very, very expensive.

#### Virtualized Deployments

- To solve the above issue, virtualization - aka Virtual Machines were developed. Virtualization allows for multiple virtual machines (which are complete, virtual copies of a computer) to run on a single host. If one host has lot's of good hardware / performance, you could run many VMs on one machine and of course, if you own many machines which can host many VMs, you can create a very scalable and efficient system that is cheaper (this being a distributed system where every machine is connected as a cluster )
- Virtualization allows better utilization of resources in a physical server and allows better scalability because an application can be added or updated easily, reduces hardware costs, and much more. With virtualization you can present a set of physical resources as a cluster of disposable virtual machines.
- Each VM is a full machine running all the components, including its own operating system, on top of the virtualized hardware.
- Today this is still widely used and very popular. In fact, even if deploying in a containerized workflow like explained below, the actual machines these deployments run on are often VMs deployed on machines owned by a cloud service provider i.e EC2 instances on AWS managed machines in amazon data centers.

#### Containerized Deployments

- This is the most modern, scalable and cost efficient solution which enables any company to deploy fast and keep downtime to a minimum. It is also very portable and lightweight and easy to deploy anywhere that can support containerized deployments (Elastic Beanstalk, GKS, etc.)
- Containers are often described as light weight virtual machines which is true in a sense but they differ in a few ways
  - Relaxed isolation properties for sharing OS resources
  - very light weight
  - decoupled from any infrastructure (VMs require a hypervisor and are tightly coupled to hardware)
- Similar to a VM, a container has its own filesystem, share of CPU, memory, process space, and more. As they are decoupled from the underlying infrastructure, they are portable across clouds and OS distributions.

**Per the Kubernetes docs, here is a list of many other benefits containerized deployments offer**

- Agile application creation and deployment: increased ease and efficiency of container image creation compared to VM image use.
- Continuous development, integration, and deployment: provides for reliable and frequent container image build and deployment with quick and efficient rollbacks (due to image immutability).
- Dev and Ops separation of concerns: create application container images at build/release time rather than deployment time, thereby decoupling applications from infrastructure.
- Observability: not only surfaces OS-level information and metrics, but also application health and other signals.
- Environmental consistency across development, testing, and production: Runs the same on a laptop as it does in the cloud.
- Cloud and OS distribution portability: Runs on Ubuntu, RHEL, CoreOS, on-premises, on major public clouds, and anywhere else.
- Application-centric management: Raises the level of abstraction from running an OS on virtual hardware to running an application on an OS using logical resources.
- Loosely coupled, distributed, elastic, liberated micro-services: applications are broken into smaller, independent pieces and can be deployed and managed dynamically – not a monolithic stack running on one big single-purpose machine.
- Resource isolation: predictable application performance.
- Resource utilization: high efficiency and density.

**Why Kubernetes then?**

Containers are great because they are easy deploy and lightweight. If we wanted to spin 50 containers up and load balance them to enable some higher scale throughput on a system with expected high user volume, this is a great solution. What happens if we need to double, triple or even downsize? Logically, we can do this manually - which is fine. However, manually doing these things becomes cumbersome and hard to maintain. This is what Kubernetes helps us with - scheduling, optimizing, scaling and providing high availability and fault tolerance to containerizer, micro service architectures.

#### Kubernetes overview

[What is Kubernetes | Kubernetes explained in 15 mins](https://youtu.be/VnvRFRk_51k)

[Kubernetes Crash Course for Absolute Beginners [NEW]](https://youtu.be/s_o8dwzRlu4)

[Kubernetes Tutorial for Beginners [FULL COURSE in 4 Hours]](https://youtu.be/X48VuDVv0do)

> The above are a great intro to Kubernetes. See Kubernetes Pods, Kubernetes Deployments, [Kubernetes Architecture and Components Overview](craftdocs://open?blockId=B77A9A36-7419-4FF7-84F9-6194B24AA795&spaceId=23a94566-d418-41a0-9075-ac543852aabd) and other documents that go into detail and reach more in depth into K8s
