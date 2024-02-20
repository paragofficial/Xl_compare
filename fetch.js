const simpleGit = require('simple-git/promise');
const fs = require('fs/promises');
const path = require('path');

const repoURL = 'https://github.com/paragofficial/ExcelSheetJsonGit.git';
const mainFolder = 'code/main';
const paragbhasmeFolder = 'code/paragbhasme';

async function cloneBranch(branch, folderName) {
    const repoPath = path.join(__dirname, folderName);

    // Clone the repository
    await simpleGit().clone(repoURL, repoPath);

    // Checkout the specific branch
    await simpleGit(repoPath).checkout(branch);

    // Remove unnecessary files/folders
    const filesToRemove = ['node_modules', 'package-lock.json', '.git'];
    await Promise.all(filesToRemove.map(file => fs.rm(path.join(repoPath, file), { recursive: true, force: true })));

    console.log(`Cloned and organized ${branch} branch in ${folderName} folder.`);
}

async function main() {
    // Clone and organize main branch
    await cloneBranch('main', mainFolder);

    // Clone and organize paragbhasme branch
    await cloneBranch('paragbhasme', paragbhasmeFolder);
}

main();
