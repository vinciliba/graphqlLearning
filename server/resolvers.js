const db = require('./db');

const Query = {
    job: (root,{id}) => db.jobs.get(id),
    company: (root,{id}) => db.companies.get(id),
    jobs: () => db.jobs.list()  
};

const Job = {
    company: (job) => db.companies.get(job.companyId) 
}


const Mutation = {
    createJob:(root,{input}) => {
        const id = db.jobs.create(input);
        return db.jobs.get(id);
    }
};

const Company = {
    jobs: (company) => db.jobs.list()
      .filter((job) => job.companyId === company.id)
};


module.exports = {Query,Job,Company,Mutation};
