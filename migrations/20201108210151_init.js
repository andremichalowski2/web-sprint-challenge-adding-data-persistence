const Knex = require("knex");

exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
    tbl.increments()
    tbl.string('project_name').notNullable();
    tbl.text('project_description');
    tbl.boolean('project_completed').notNullable().defaultTo(false).onDelete('CASCADE');
  })
  .createTable('tasks', tbl => {
    tbl.increments();
    tbl.string('task_description').notNullable();
    tbl.text('task_notes');
    tbl.boolean('task_completed').notNullable().defaultTo(false);
    tbl.integer('project_id').unsigned().notNullable().references('id').inTable('projects').onDelete('CASCADE').onUpdate('CASCADE');
  })
  .createTable('task_resources', tbl => {
    tbl.increments();
    tbl.integer('task_id').unsigned().notNullable().references('id').inTable('tasks');
    tbl.integer('resource_id').unsigned().notNullable().references('id').inTable('resources').onDelete('CASCADE').onUpdate('CASCADE');
  })
  .createTable('resources', tbl => {
    tbl.increments();
    tbl.string('resource_name').notNullable().unique();
    tbl.text('resource_description');
  })

  /* 
  - [x] Design the data model and use _knex migrations_ to create the database and tables needed to satisfy the following business rules:
  - [x] a `project` can have multiple `tasks`.
  - [x] a `task` belongs to only one `project`.
  - [x] a `project` can use multiple `resources`. Example of `resources` are: computer, conference room, microphone, delivery van.
  - [x] the same `resource` can be used in multiple `projects`.
  - [x] when adding `projects` the client must provide a name, the description is optional.
  - [x]  when adding `resources` the client must provide a name, the description is optional.
  - [x] when adding a `task` the client must provide a description, the notes are optional.
  - [x] when adding a `task` the client must provide the `id` of an existing project.
  - [x] for `projects` and `tasks` if no value is provided for the `completed` property, the API should provide a default value of `false`.

  A `project` is what needs to be done. We want to store the following data about a `project`:


- [x] a unique ID.
- [x] a name. This column is required.
- [x] a description.
- [x] a boolean that indicates if the project has been completed. This column is required, the default value should be `false`.

A `resource` is anything needed to complete a project, some examples are: a person, a tool, a meeting room or a software license. We want to store the following data about a `resource`:

- [ ] a unique ID.
- [ ] a name. This column is required.
- [ ] a description.

The database should not allow resources with duplicate names.

A `task` is one of the steps needed to complete the project. We want to store the following data about an `task`.

- [ ] a unique ID.
- [ ] a description of what needs to be done. This column is required.
- [ ] a notes column to add additional information.
- [ ] a boolean that indicates if the task has been completed. This column cannot be NULL, the default value should be `false`.

*/
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('resources')
  .dropTableIfExists('task_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('projects')
};
