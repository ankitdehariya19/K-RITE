const demoData = [
    {
        id: 1,
        brand: {
          name: "Wix",
          imageURL: "https://cdn-icons-png.flaticon.com/512/5968/5968753.png",
          messages: [
            { id: 1, text: "Hello from Nike!" },
            { id: 2, text: "Welcome to Nike products." },
          ],
        },
        description: "Develop a personalized fit",
        members: [
          { name: "John Doe", image: "https://randomuser.me/api/portraits/men/1.jpg" },
          { name: "Jane Smith", image: "https://randomuser.me/api/portraits/women/2.jpg" },
          { name: "Jane Smith", image: "https://randomuser.me/api/portraits/women/2.jpg" },
          { name: "Jane Smith", image: "https://randomuser.me/api/portraits/women/2.jpg" },
        ],
        categories: [ "Automation"],
        tags: ["DigitalTransformation", "Athletic", "Outdoor"],
        nextMeeting: "In 30 minutes",
      },
    {
      id: 2,
      brand: {
        name: "Shopify",
        imageURL: "https://assets-global.website-files.com/61f3631919875f548dcf79b4/61f3631919875f878ecf8086_5f6ed45767127a225a7df9b6_5ea8b56a100359483196f631_Shopify.png",
      },
      description: "Introduce a cloud-based p..",
      members: [
        { name: "Mike Johnson", image: "https://randomuser.me/api/portraits/men/3.jpg" },
        { name: "Emily Brown", image: "https://randomuser.me/api/portraits/women/4.jpg" },
        { name: "Jane Smith", image: "https://randomuser.me/api/portraits/women/2.jpg" },
        { name: "Jane Smith", image: "https://randomuser.me/api/portraits/women/2.jpg" },
      ],
      categories: ["E-commerce", "B2b"],
      tags: ["OnlineShopping", "DigitalTransformation", ],
      nextMeeting: "Next Meeting 2",
    },
    {
      id: 3,
      brand: {
        name: "MailChimp",
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
      },
      description: "Develop a Mobile app aim..",
      members: [
        { name: "Chris Evans", image: "https://randomuser.me/api/portraits/men/5.jpg" },
        { name: "Emma Watson", image: "https://randomuser.me/api/portraits/women/6.jpg" },
        { name: "Chris Evans", image: "https://randomuser.me/api/portraits/men/5.jpg" },
        { name: "Emma Watson", image: "https://randomuser.me/api/portraits/women/6.jpg" },
      ],
      categories: ["SAAS", "Mobile"],
      tags: ["Techlnnovation", "Style", "Trendy"],
      nextMeeting: "Tommorrow",
    },
    {
      id: 4,
      brand: {
        name: "PayPal",
        imageURL: "https://asset.brandfetch.io/id-Wd4a4TS/idcMv2R0rt.png",
        messages: [
            { id: 1, text: "Hello from Nike!" },
            { id: 2, text: "Welcome to Nike products." },
            { id: 3, text: "Welcome to Nike products." },
            { id: 4, text: "Welcome to Nike products." },
            { id: 5, text: "Welcome to Nike products." },
            { id: 6, text: "Welcome to Nike products." },
            { id: 7, text: "Welcome to Nike products." },
          ],
      },
      description: "Develop a Mobile app aim..",
      members: [
        { name: "Tom Hanks", image: "https://randomuser.me/api/portraits/men/7.jpg" },
        { name: "Scarlett Johansson", image: "https://randomuser.me/api/portraits/women/8.jpg" },
        { name: "Chris Evans", image: "https://randomuser.me/api/portraits/men/5.jpg" },
        { name: "Emma Watson", image: "https://randomuser.me/api/portraits/women/6.jpg" },
        { name: "Chris Evans", image: "https://randomuser.me/api/portraits/men/5.jpg" },
      
      ],
      categories: ["MarketPlace", "Tablets"],
      tags: ["BuySellOnline", "Tablet", "Productivity"],
      nextMeeting: "in 6 hours",
    },
    {
        id: 5,
        brand: {
          name: "Disney",
          imageURL: "https://seeklogo.com/images/D/disney-logo-575AED0F1D-seeklogo.com.png",
          messages: [
            { id: 1, text: "Hello from Nike!" },
            { id: 2, text: "Welcome to Nike products." },
          ],
        },
        description: "Develop a personalized fit",
        members: [
          { name: "John Doe", image: "https://randomuser.me/api/portraits/men/1.jpg" },
          { name: "Jane Smith", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    
        ],
        categories: [ "B2B",'B2C'],
        tags: ["DigitalTransformation", "Athletic", "Outdoor"],
        nextMeeting: "In 30 minutes",
      },
      {
        id: 6,
        brand: {
          name: "Intercom",
          imageURL: "https://assets-global.website-files.com/652573f752f7acbb92e633e0/6557480e7e2e949e90456cd4_Intercom.png",
          messages: [
            { id: 1, text: "Hello from Nike!" },
            { id: 2, text: "Welcome to Nike products." },
          ],
        },
        description: "Develop a personalized fit",
        members: [
          { name: "John Doe", image: "https://randomuser.me/api/portraits/men/1.jpg" },
          { name: "Jane Smith", image: "https://randomuser.me/api/portraits/women/2.jpg" },
      
          { name: "Jane Smith", image: "https://randomuser.me/api/portraits/women/2.jpg" },
        ],
        categories: [ "Automation"],
        tags: ["DigitalTransformation", "Athletic", "Outdoor"],
        nextMeeting: "No Contact",
      },
      {
        id: 7,
        brand: {
          name: "Google",
          imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png",
          messages: [
            { id: 1, text: "Hello from Nike!" },
            { id: 2, text: "Welcome to Nike products." },
          ],
        },
        description: "Develop a personalized fit",
        members: [
          { name: "John Doe", image: "https://randomuser.me/api/portraits/men/1.jpg" },
          { name: "Jane Smith", image: "https://randomuser.me/api/portraits/women/2.jpg" },
          { name: "Jane Smith", image: "https://randomuser.me/api/portraits/women/2.jpg" },
          { name: "Jane Smith", image: "https://randomuser.me/api/portraits/women/2.jpg" },
        ],
        categories: [ "Automation"],
        tags: ["DigitalTransformation", "Athletic", "Outdoor"],
        nextMeeting: "In 30 minutes",
      },
      {
        id: 8,
        brand: {
          name: "Evernote",
          imageURL: "https://cdn-icons-png.flaticon.com/512/3488/3488413.png",
          messages: [
            { id: 1, text: "Hello from Nike!" },
            { id: 2, text: "Welcome to Nike products." },
          ],
        },
        description: "Develop a personalized fit",
        members: [
          { name: "John Doe", image: "https://randomuser.me/api/portraits/men/1.jpg" },
          { name: "Jane Smith", image: "https://randomuser.me/api/portraits/women/2.jpg" },
          { name: "Jane Smith", image: "https://randomuser.me/api/portraits/women/2.jpg" },
   
        ],
        categories: [ "Automation"],
        tags: ["DigitalTransformation", "Athletic", "Outdoor"],
        nextMeeting: "In 30 minutes",
      },
      {
        id: 9,
        brand: {
          name: "Microsoft",
          imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png",
          messages: [
            { id: 1, text: "Hello from Nike!" },
            { id: 2, text: "Welcome to Nike products." },
          ],
        },
        description: "Develop a personalized fit",
        members: [
          { name: "John Doe", image: "https://randomuser.me/api/portraits/men/1.jpg" },
          { name: "Jane Smith", image: "https://randomuser.me/api/portraits/women/2.jpg" },
          { name: "Jane Smith", image: "https://randomuser.me/api/portraits/women/2.jpg" },
          { name: "Jane Smith", image: "https://randomuser.me/api/portraits/women/2.jpg" },
        ],
        categories: [ "Automation"],
        tags: ["DigitalTransformation", "Athletic", "Outdoor"],
        nextMeeting: "In 30 minutes",
      },
      {
        id: 10,
        brand: {
          name: "Invision",
          imageURL: "https://cdn.worldvectorlogo.com/logos/invision.svg",
          messages: [
            { id: 1, text: "Hello from Nike!" },
            { id: 2, text: "Welcome to Nike products." },
          ],
        },
        description: "Develop a personalized fit",
        members: [
          { name: "John Doe", image: "https://randomuser.me/api/portraits/men/1.jpg" },
          { name: "Jane Smith", image: "https://randomuser.me/api/portraits/women/2.jpg" },

        ],
        categories: [ "Automation"],
        tags: ["DigitalTransformation", "Athletic", "Outdoor"],
        nextMeeting: "In 30 minutes",
      },
    // Add more data entries as needed
  ];
  
  export default demoData;
  