export type Project = {
  number: string; title: string; category: string; description: string; details: string;
  stack: string[]; github: string; demo?: string; featured?: boolean; visual: 'churn'|'finance'|'air'|'cricket'|'commerce'|'feedback';
};

export const projects: Project[] = [
  {
    number:'01', title:'Customer Churn Prediction', category:'MACHINE LEARNING',
    description:'A machine-learning application focused on identifying customers who may be at risk of leaving a service.',
    details:'Explore a churn-prediction workflow through a deployed interactive application and the project repository.',
    stack:['Python','Machine Learning','Streamlit'], github:'https://github.com/Ashokreddy45/customer-churn-prediction',
    demo:'https://customer-churn-prediction-akvxzgjsjcfaqchilwzygz.streamlit.app', featured:true, visual:'churn'
  },
  {
    number:'02', title:'FinTrack — Expense Tracker', category:'FULL-STACK APPLICATION',
    description:'A personal finance application for organizing income, expenses, budgets, and spending insights.',
    details:'Built around practical financial workflows, with transaction management and dashboard-oriented analysis.',
    stack:['Python','Django','JavaScript','Chart.js'], github:'https://github.com/Ashokreddy45/EXPENSE-TRACKER',
    demo:'https://fintrack-expense-tracker1.onrender.com', featured:true, visual:'finance'
  },
  {
    number:'03', title:'Indian Air Pollution Analysis', category:'DATA ANALYTICS',
    description:'An exploratory analysis project examining air-pollution patterns across India through data and visualizations.',
    details:'The project combines analytical notebooks with a published dashboard for exploring the analysis.',
    stack:['Python','Pandas','Data Visualization','Streamlit'], github:'https://github.com/Ashokreddy45/india-air-pollution-analysis',
    demo:'https://india-air-pollution-analysis-kzhtkcbnsaucblj5wsucqb.streamlit.app', featured:true, visual:'air'
  },
  {
    number:'04', title:'IPL Intelligence', category:'SPORTS ANALYTICS',
    description:'A cricket analytics project that presents IPL data through an interactive dashboard.',
    details:'Explore the published application and repository for the available data analysis and visual reporting.',
    stack:['Python','Pandas','Analytics','Streamlit'], github:'https://github.com/Ashokreddy45/ipl-intelligence',
    demo:'https://ipl-intelligence-nkqj6vtrqlbab2gvoygege.streamlit.app', featured:true, visual:'cricket'
  },
  {
    number:'05', title:'E-commerce SQL & BI', category:'BUSINESS INTELLIGENCE',
    description:'An e-commerce analysis project built around SQL-driven questions and business intelligence insights.',
    details:'The live application and source repository provide the starting point for exploring the analytical workflow.',
    stack:['SQL','Python','Business Intelligence','Streamlit'], github:'https://github.com/Ashokreddy45/ecommerce-sql-bi-project',
    demo:'https://ecommerce-sql-bi-project-3snvoqbbt7es3mkb56usiw.streamlit.app/', featured:true, visual:'commerce'
  },
  {
    number:'06', title:'Feedback System Backend', category:'BACKEND ENGINEERING',
    description:'A backend-focused project for a feedback system, published as a standalone GitHub repository.',
    details:'Review the repository for implementation details, setup instructions, and supported functionality.',
    stack:['Backend Development','API','Git'], github:'https://github.com/Ashokreddy45/feedback-system-backend', featured:false, visual:'feedback'
  }
];
