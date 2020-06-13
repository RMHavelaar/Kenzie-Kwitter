

A portion of your grade will be based on your team-working ability. Please see [this document](https://gitlab.com/kenzie-academy/se_public_files/team-guidelines/-/tree/master)
for guidelines.

You will also be following the Scrum process and, although everyone will be a developer and individual contributor, your team should account for the roles of Product Owner,
Scrum Master, and QA Tester. Please see [this document](https://gitlab.com/kenzie-academy/se_public_files/scrum-guidelines/-/blob/master/README.md) for more details.

Client memo:

_The logged in user's experience is the core of this application. So we want to establish this core experience first._
_Since this is a social application, we would like the application to emphasize engagement and engaging with other users as much as possible._
_We are also interested in establishing the look and feel of our visual brand early so that it can be reused throughout the rest of the application._

## Learning Objectives

- Practice building larger applications with React + Redux
- Practice using react-router-dom / promises / redux
- Practice building a system architecture for an application
- Practice reading and understanding a 3rd-party back-end API
- Practice using a component library
- Practice following Scrum processes and performing Scrum roles
- Practice communicating/working together as a team

An optional starter scaffolding is provided [here.](https://gitlab.com/vstlouis.kenzie/kwitter-frontend-former). Please choose ONE OR THE OTHER. NOT BOTH.

An overview of the starting scaffolding architecture can be found in `./dependencygraph.html`

## Getting Started...

1. Create a Scrum board (trello, github/gitlab project board, etc.)
   - [trello scrum example](https://trello.com/b/0xzkRjTH/scrum-project-management-board)
2. Plan out your first week sprint goals.
3. Familiarize yourself with [the API](https://kwitter-api.herokuapp.com/docs/)
4. Create mock ups for possible pages
5. Break each page out into possible components
6. Discuss API endpoints you'll hit, how you'll store data in your Redux store, and which components will need access to the store
7. Discuss and research what component library you would like to use and explore its components
8. Begin creating and using components to establish a general foundation for your app

## Submission

1. git repo url - this is the url that has your frontend kwitter project source code
2. Scrum board - this shows your scrum board which has tickets with descriptions and assignees. it could be a trello board or a gitlab/github project board or similar.
3. Retrospective board or notes - show that your team discussed how to improve its process through notes about what went well/what went poorly/action items.
   It could be general notes or a funretro.io board.







        <Card id="messageCard">
          <Card.Content>
            {/* Empty Profile Pic */}
            {/* <Image src="./src/assets/images/EmptyProfilePic.png" /> */}
            <Card.Header>
              {/* Path may be wrong but this will fill in the Users name on the Message Card */}
              <Link to={`/profile/${this.props.username}`}>
                <h2>{this.props.username}</h2>
              </Link>
            </Card.Header>
            <Card.Description>
              {/* This is the Message Text */}
              <p>{this.props.text}</p>
            </Card.Description>
          </Card.Content>
          <Card.Content>{/* What else do we want? */}</Card.Content>
          
        </Card>