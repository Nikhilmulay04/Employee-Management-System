const employees = [
  {
    id: 1,
    firstname: "Amit",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Prepare sales report",
        description: "Compile the sales data for Q2",
        date: "2025-08-12",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client meeting",
        description: "Discuss project updates with ACME Corp",
        date: "2025-08-13",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update CRM",
        description: "Add new leads from last week's conference",
        date: "2025-08-14",
        category: "Data Entry",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstname: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Design homepage banner",
        description: "Create promotional banner for summer sale",
        date: "2025-08-15",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Review blog drafts",
        description: "Edit and approve articles from content team",
        date: "2025-08-16",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "SEO optimization",
        description: "Improve search ranking for main landing pages",
        date: "2025-08-17",
        category: "SEO",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Social media campaign",
        description: "Plan Instagram stories for product launch",
        date: "2025-08-18",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstname: "Ravi",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Database backup",
        description: "Run weekly backup of all production databases",
        date: "2025-08-12",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Bug fixing",
        description: "Resolve high-priority tickets from QA",
        date: "2025-08-13",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Code review",
        description: "Review merge requests from frontend team",
        date: "2025-08-14",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Server upgrade",
        description: "Update Node.js version on staging server",
        date: "2025-08-15",
        category: "IT",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Team meeting",
        description: "Sprint planning with dev team",
        date: "2025-08-16",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    firstname: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Customer feedback analysis",
        description: "Review NPS survey results",
        date: "2025-08-12",
        category: "Analysis",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Prepare product demo",
        description: "Record video walkthrough for new feature",
        date: "2025-08-13",
        category: "Product",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Market research",
        description: "Research competitors' pricing strategies",
        date: "2025-08-14",
        category: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstname: "Vikram",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Onboarding session",
        description: "Train new hires on company policies",
        date: "2025-08-12",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Payroll processing",
        description: "Prepare salary payments for August",
        date: "2025-08-13",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Benefits review",
        description: "Update health insurance plan details",
        date: "2025-08-14",
        category: "HR",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Team lunch",
        description: "Coordinate with restaurant for Friday lunch",
        date: "2025-08-15",
        category: "Events",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstname: "Arjun",
    email: "admin@example.com",
    password: "123"
  }
];



export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return {employees, admin}
    // const data = localStorage.getItem('employees')
    // console.log(data)
}