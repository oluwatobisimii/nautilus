import charis from "../assets/images/charis.png";
import unilever from "../assets/images/unilever.png";
import antelope from "../assets/images/antelope.png";
import integrated from "../assets/images/integrated.png";
import composable from "../assets/images/composable.png";
import pins from "../assets/images/Pins.png";
import worldbay from "../assets/images/worldbay.png";
import tribl from "../assets/images/tribl.png";
import africaPrudential from "../assets/images/africaPrudential.png";
import baskets from "../assets/images/12baskets.png";
import grocedy from "../assets/images/grocedy.png";


export const data = [
    {
        title: "Integrated Payments Service Limited",
        image: integrated,
        category: "fintech",
        background:"Our client is the real-time payment services company of Kenya Bankers Association. Established in 2015 under the National Payment System (NPS) Act, to address the challenge of inter-bank money transfers in the country. The company provides secure and instant money transfer rails, branded PesaLink.",
        challenges:`The client needed to build a dependable, robust and secure technology infrastructure for:

        Migrating their on-prem cluster to the cloud (AWS)

        Containerizing the micro-services and using Kubernetes as a container orchestration system for automating deployments, scaling and management of containerized applications.
        `,
        ourApproach:`Nautilus technologies adopted the following implementation approach in a phased manner:
        
        Understanding the existing infrastructure
        
        Migrating prospect services for Dev/QA environments from on-prem to the cloud (AWS)
        
        Containerizing the micro-services and deploying them using Kubernetes clusters built from the scratch.
        
        Configuring CI/CD pipeline to build and deploy to micro-services on Kubernetes cluster.`,
        customerOutcome:`Facilitated on-demand supply of the necessary infrastructure for Dev/QA teams to develop and test the scenarios. Users can run a CI/CD pipeline to build or deploy a micro-service, deploy the resources like S3 buckets, SNS, SQS, Lambdas, or deploy a fully functioning EKS (Kubernetes) cluster.

        Users can easily create, update or delete the existing infrastructure within minutes with the help of Terraform automation.

        Better performance with improved efficiency.
        `
    },
    {
        title: "Composable Finance",
        category: "fintech",
        image:composable,
        background:"Our client is a decentralized finance (DeFi) cross-chain and cross-layer interoperability platform designed to make more DeFi protocols interoperable. They seek to eliminate the lack of cohesion and fragmented liquidity siloes across different blockchains that are currently besieging the DeFi ecosystem.",
        challenges:`The Composable finance team was facing the following hurdles in managing and deploying the optimum Blockchain Network for the specified business goals:

        A quick and easy development environment setup with the desired consensus option and logging options of the nodes for debugging.
        
        Standardized implementation so that there are no missing parameters or bugs in the deployed network.
        
        No external dependencies including cloud lock-in.
        
        Proactive monitoring and alerts so as to avoid setting up a dedicated internal DevOps team.
        
        Heterogeneous cloud deployment support to accommodate the cloud preferences of different consortium partners.
        
        Automation of CI/CD pipelines.
        `,
        ourApproach:`In this project, our main goal was to review and manage the client blockchain infrastructure:

        Nautilus technologies facilitated easy network setup with all the configurations and parameters taken care of and the network working flawlessly.
        
        Nautilus technologies also allows users to easily add/remove or reconfigure nodes on demand, thus saving crucial time and also additional effort.
        
        Nautilus technologies automated the deployment process & set up of CI-CD pipelines.
        `,
        customerOutcome:`The association with Nautilus technologies helped the client  ease their operational, security, and performance challenges while deploying and managing Blockchain nodes and networks:
        
        Technical support: Experts from the Nautilus team helped with technicalities and complexities involved with the deployment of the enterprise blockchain solutions.
        
        Save costs: Nautilus automates the entire DevOps lifecycle for accelerating the Enterprise Blockchain Implementation.
        
        Proactive Monitoring – Nautilus set up proactive monitoring of Blockchain and cloud resources.`
    },
    {
        title: "Tribl Network",
        image: tribl,
        category: "fintech, ecommerce",
        background:"Our client is an online platform that helps black migrants connect with locals. It is a messaging app that instantly builds bridges across cultures based on national origins, social connections, interests and location to create these unique intersections.",
        challenges:"Tribl Network is looking to proactively apply DevOps principles in building a highly scalable, reliable and secure infrastructure.",
        ourApproach:`After assessing the firm's technology and business needs, Nautilus recommended a DevOps based AWS microservices architecture. 
 
        Our team helped the IT team design the AWS based microservices, with auto-scaling and fault tolerance in mind, this delivered a higher level of service availability and developer productivity. The microservices environment was built with Docker, AWS EKS, Terraform and Rancher, featuring Hashicorp Consul server for service discovery and the company’s applications which are deployed within application containers.
        `,
        customerOutcome:`As a result of the AWS microservices architecture, Tribl has been able to create a stable platform. The firm applies DevOps principles and automations which allows for much greater automation of the configuration, deployment and delivery process as well as auto-scaling of services. 
 
        The development team as a result of its new architecture is spending less time on tactical, manual tasks and more time on strategic solution delivery, ultimately helping the firm deliver the greatest goals of its new engine: greater wellness for its customers.`
    },
    {
        title: "Antelope Consulting",
        image: antelope,
        category: "consulting",
        background:"Our client is a provider of IT solutions, support and consultancy. They provide everything from partner level outsourcing to specialist consultancy.",
        challenges:"The key requirements were to orchestrate different platforms such as Cloud, DevOps and IT infrastructure and enable end-to-end, rapid and scalable application deployment for the client’s app teams. The manual workflow was hampering the infrastructure provisioning and needed to be automated. In addition, broken pipelines and bugs in the tool had to be addressed.",
        ourApproach:`We partnered with the company to analyze their current environment, their staff and talent, existing technology and their goals for the future.
 
        We then worked with the newly re-aligned cross-functional teams to develop a standard, repeatable methodology for developing solutions.
         
        We designed and helped them implement a DevOps solution for application development, infrastructure as Code (IAC), injected security, monitoring, and ongoing maintenance.
        `,
        customerOutcome:`The association with Nautilus technologies helped the client derive multiple benefits including:

            Faster service delivery
        
            Streamlined workflows in both Infrastructure and Cloud layers
        
            Lesser downtime
            
            Reduced roadblocks
        
            Automation of repetitive, time-intensive tasks
        
            Increased productivity and efficiency.
        `
    },
    {
        title: "Worldbay Technologies",
        image: worldbay,
        category: "consulting",
        background:"Our client is a new age innovations IT solutions company with state-of-the-art technology that efficiently and effectively helps coordinate enterprise operations in large corporations and evolving businesses across several sectors and industries.",
        challenges:"The client’s previous application lacked cutting-edge features that can streamline their products to provide world-class service. Hence, World Bay asked Nautilus technologies to develop a new feature that will enable users to subscribe to their food plans and pay in installment.",
        ourApproach:`Nautilus technologies provided custom software development services to develop a solution and integrate:

            USSD to the existing system for signups.
        
            SMS to the existing system for notifications
        
            Reserved Bank Account for Customers upon completing their signup
        
            Data Migration
        `,
        customerOutcome:`By having transparent conversations, prior research, and a detailed technical plan, our team was able to anticipate potential issues or roadblocks and navigate them quickly and efficiently.
        `
    },
    {
        title: "Africa Prudential Plc",
        image: africaPrudential,
        category: "consulting",
        background:"Africa Prudential Plc provides share registration services in Nigeria. Its products include e-registration solutions, dividend, offer and replacement. The firm offers services for corporate organizations in the primary and secondary sectors of the capital market. The company was founded on March 23, 2006 and is headquartered in Lagos, Nigeria.",
        challenges:"The organization needs a highly secured infrastructure, with a seamless deployment of microservices with a faster response time. Our client also needed assistance with the smooth deployment of its website.",
        ourApproach:`Helped to develop a seamless deployment of microservices on cloud environments (Azure) while reducing response time, increasing availability, and providing a highly secured application infrastructure. Implemented an agile integration and deployment process to help reduce deployment time and increase productivity. Also assisted in deploying websites in a smooth manner with less admin overhead.`,
        customerOutcome:`The deployment process was smooth, implementation of the solution was seamless, and the application's performance is exceptional.
            
            Initial load of the page is sub-second.
            
            Updates are deployed with under 10 seconds
        `
    },
    {
        title: "Grocedy",
        image:grocedy,
        category: "ecommerce",
        background:"Our client works with local farmers, manufacturers and cooperatives to source the best quality produce for her subscribers and make food as affordable as possible at wholesale prices through a monthly subscription service.",
        challenges:`Our client needed to launch onto an infrastructure that could keep costs low during the business’s establishment stage, and increase expenditure as more clients started using the service. The organization also wanted to pay for infrastructure on demand. 
 
        The infrastructure had to be highly available and scalable to support traffic. In addition, the infrastructure also had to support Grocedy’s plans to operate in several markets, and locate its services in data centers close to prospective clients to minimize latency.
        `,
        ourApproach:`Our team helped with the whole structuring of their cloud environment (AWS) with key focus on security, scalability, availability and latency. Developed their services with containerization (orchestration and management), setting up basic workflow to help with a seamless integration and deployment to production while achieving minimal downtime and maximum results.`,
        customerOutcome:`By engaging with Nautilus technologies, Our client was able to revitalize its cloud architecture without moving any workloads away from AWS. Grocedy’s IT infrastructure is now more scalable, cost-efficient, reliable, and secure, due to the AWS features that we implemented.`
    },
    {
        title: "12Baskets",
        image: baskets,
        category: "ecommerce",
        background:"The 12 basket team is a fast food company that makes a variety of small chops for large and small events. They have customers from all over Nigeria, and people love them for the awesome and mouth watering service they provide.",
        challenges:`The organization needs to make it easy for their customers to order small chops and all the other services they provide without a physical contact. The need for online platforms that could make this possible was birthed. 
 
        The 12 basket team needed a Mobile Application that runs on both iOS and Google Play stores respectively, as well as a Web app where people can easily do the same from their websites.
        `,
        ourApproach:`Our team came up with a website for 12 basket, this website is mobile and PC friendly. We also created a mobile app for the company, we made these apps available on Apple and Google play store. The app makes it possible for customers:

        Search for 12 Baskets stores closest to them and place an order.
        
        Payment options are quite seamless, integrating multiple payment gateways into the food ordering app including Paystack.
        
        Exclusive access of the app is granted to the administrators of 12 baskets. With this access, they are able to manage orders, get real time updates, monitor and track previous transactions.
        `,
        customerOutcome:`With a mobile app that is ready to use, 12 basket stores were able to quickly take their products online. A mobile application served as a quick launch app that could take your store directly to your customers. Going mobile drives greater sales.`


    },
    {
        title: "Charis Oil and Gas",
        category: "business",
        image: charis,
        background:"Charis Oil is an online platform that provides seamless automation and coordination of Oil and Gas retail processes and transactions.",
        challenges:"The client embarked on a mission to scale their business, implement DevOps culture, standardize the benchmark practices for specific engineering teams to align their pursued business agility with IT agility while automating manual deployment processes. The internal team was facing challenges with implementing effective DevOps principles in building a highly scalable, reliable and secure infrastructure.",
        ourApproach:`The objective is to enable Continuous Integration and Continuous Delivery through which developers can integrate code several times a day so that they can do error detection faster and turn software release cycles shorter. Taking a digital-first approach, our solutions architect design their AWS based microservices, with efficient automation, auto-scaling and fault tolerance in mind.`,
        customerOutcome:`Charis Oil creates a stable platform for her next-generation online retail service for oil and gas products. The firm has been able to apply DevOps principles and automations which will allow for much greater automation of the configuration, deployment and delivery process as well as auto-scaling of services. The client was able to save time with less human- involvement and increase customer satisfaction.`

    },
    {
        title: "Unilever",
        image: unilever,
        category: "manufacturing",
        background:"Unilever produces and supplies fast-moving consumer goods in food, home, and personal care product categories worldwide.",
        challenges:"As the client’s business expanded to various locations, the on-premise windows server started to face hardware and network challenges that resulted in downtime. The sudden increase in downtime made it threatening for the client to manage the expanded network. Therefore, they contacted Nautilus Technologies to migrate their on-premise server over to the cloud.",
        ourApproach:`Our first step in helping Unilever to migrate their windows server to the cloud was to understand the existing obstacles from inside-out.
 
        The first order of business was to move their mainframe business applications and data to modern systems and evolve them into modern formats. With the help of AWS and its myriad cloud services.

        We noted each challenge and all the necessary processes to help them migrate to the cloud with an end-to-end migration checklist.

        We identified quick wins and created a list of ‘must-have‘, ‘good to have‘ and ‘nice to have’. Then based on the above points, we created a tried-and-tested migration plan.

        The next step we employed was the setting-up of an AWS with must-have features and then tested them on a staging setup.

        We created stringent firewall rules to block or introduce challenges in case of any unauthorized activity through specific browsers, regions, IPs, bots, etc.
        `,
        customerOutcome:`For Unilever, moving to the AWS Cloud improved business agility and operational efficiency.

        Server migration saved the system from unprecedented bug encroachment

        AWS employs high-end security measures that provide a protected environment for the client’s server and keep the data under several layers of protection.

        The business is running successfully on its server on AWS and now is capable of meeting workloads with streamlined processes.

        There was little to no downtime after the migration.
        `
    },
    {
        title: "Pins Solution",
        image: pins,
        category: "manufacturing",
        background:"Pins Solution is a smartphone monitoring software that is designed to track and find missing or stolen phones, parental phone controls of their children, also crafted for employers to monitor the devices which belong to them and on which the employees work.",
        challenges:"As the customer base grew and digital communication became mainstream for the users, the client recognized the need for a more robust infrastructure setup to achieve business agility. They embarked on a mission to set up IT agility while building a DevOps culture with automating manual deployment processes to achieve faster application release times.",
        ourApproach:`Our team designed and implemented a continuous deployment process for Pins mobile and web applications. We went on to develop proper scalability and maintenance for seamless integration from the development environment to the production environment across multiple servers while maintaining minimal downtime.
        `,
        customerOutcome:`By implementing CI/CD on AWS, the client was able to improve the software delivery practices, helping them meet the growing business needs of their customers. They are also leveraging improved software quality and streamlined engineering workflows.
        `
    },
];