# Burroughs

## Introduction
Burroughs is a small program I wrote for a job programming exercise.

## The Task
Create a small command line utility to help a small fictional company calculate the dates on which they should pay their sales staff.
Company payroll is handled like so:
- Sales staff are paid a regular fixed base salary each month, plus a regular
monthly bonus.
- Base salaries are paid on the last day of each month, unless that day is a
Saturday or Sunday (a weekend), in which case they are paid on the Friday
before the weekend
- On the 15th of each month, bonuses are paid for the previous month, unless
that day is a weekend, in which case they are paid on the first Wednesday after the 15th.

Your utility should calculate the payment dates for the next 12 months, including the current month, and output to the screen in a CSV format.

## Requirements
The project was built on top of nodejs `v10.15.0`. while other versions may work, this is the only version it has been tested on.

This project does make use of `dayJS` to make date-time manipulation a bit simpler. The reason dayjs was chosen over a more popular, such as momentJS, solution is that dayJS is known for being a minimal 2kb in size.

## Setup
All requirements can be installed via NPM or YARN using `npm install` or `yarn` from the project directory. To run the program, simply run the comman `npm start` or `yarn start`.