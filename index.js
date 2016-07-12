#!/usr/bin/env node
// https://www.npmjs.com/package/shelljs
require('shelljs/global');

//https://www.npmjs.com/package/commander
var program = require('commander');

// Defaults
var linkyclickydir = '/Users/cjwest/Documents/htdocs/behat/linky_clicky/';
var behatlocalyml = '/Users/cjwest/Documents/htdocs/behat/behat.local.yml';
var behat = linkyclickydir + 'bin/behat';

var productsdir = linkyclickydir + 'products/';
var sitesdir = linkyclickydir + 'sites/';
var product = 'jse';
var site = 'engineering';
var profile = 'local-jse-dev';
var suite = 'deploy';
var features = 'features/'

var startdir = pwd();
var dryrun = '';
var cmd = '';

program
  .version('0.0.1')
  .option('-p, --profile <type>', 'Profile')
  .option('-s, --suite <type>', 'Suite', suite)
  .option('-v, --verbose <type>', 'Verbose')
  .option('-r, --product <type>', 'Product', product)
  .option('-i, --site <type>', 'Site', site)
  .option('--dryrun', 'Dry Run', dryrun)
  .parse(process.argv);

  console.log('\nprogram.profile: ' + program.profile);
  if (program.profile) profile = program.profile;
  if (program.dryrun) dry_run = '--dryrun';

//if (program.pineapple) console.log('  - pineapple');
//if (program.bbqSauce) console.log('  - bbq');

cmd = behat + ' -p ' + profile + ' -s ' + suite + ' ' + dryrun + ' ' + features;
console.log('\nRunning with: '
  + '\nlinky-clicky directory: ' + linkyclickydir
  + '\nbehat: ' + behat
  + '\nbehat.local.yml: ' + behatlocalyml
  + '\nstartdir: ' + startdir
  + '\ncommand: ' + cmd

  + '\n');

cd(productsdir + product);
exec(cmd);
cd(startdir);
