import ProjectsModel from "../../src/models/ProjectsModel";

import fs from 'fs';
import path from 'path';


test('categories with ids from projects list', () => {
    const dataFile = path.join(__dirname, '..', 'sample-data', 'projects.json');
    const projectData = JSON.parse(fs.readFileSync(dataFile));
    let projectsModel = new ProjectsModel({projects: projectData});
    let categories = projectsModel.getCategories();
    expect(categories.length === 14);
});