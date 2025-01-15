# JS live coding (React only)

Time limit: 40 mins

## Installation

- Use VSCode Desktop or [vscode.dev](https://vscode.dev)
- Install [the `Live Share` extension](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)
- Connect to the interviewer machine via `Live Share` extension to start working on the problem

## Problem statement

We have a server running on `https://localhost:3001` exposing 3 APIs:

- `/login`: Login stub endpoint. This will return a session ID in the response.
- `/logout`: Logout the current session created by `login` endpoint. Need to supply the header `x-session-id: <login-session-id>` where `<login-session-id>` coming from the header.
- `/data`: 

Sample request:

```bash
curl --location 'http://localhost:3001/data?afterDate=2024-10-10T12:39:40.895Z&limit=10' \
--header 'x-session-id: 0c0f9c33c231616bdad85ab31868bc1fae356ade1b6a796840a3175be01f950f'
```

Sample response (entities will be sorted by date in ascending order)

```json
[
    {
        "name": "d1523375abbe1338",
        "date": "2024-10-10T23:48:43.561Z"
    },
    {
        "name": "eee1b35b4dc10a98",
        "date": "2024-10-10T23:48:43.561Z"
    },
    {
        "name": "0fe942e6d054529c",
        "date": "2024-10-10T23:48:43.561Z"
    },
    {
        "name": "1062c76fe986ead2",
        "date": "2024-10-10T23:48:43.561Z"
    },
    {
        "name": "e4cbbaa4c29af6d0",
        "date": "2024-10-10T23:48:43.561Z"
    },
    {
        "name": "67b3da1889f29c40",
        "date": "2024-10-10T23:48:43.561Z"
    },
    {
        "name": "d196096ffda6bb4e",
        "date": "2024-10-10T23:48:43.561Z"
    },
    {
        "name": "e0668b976c2144f9",
        "date": "2024-10-13T04:11:56.070Z"
    },
    {
        "name": "5fda3d6588fa5995",
        "date": "2024-10-13T04:11:56.070Z"
    },
    {
        "name": "77425463fa7e43fc",
        "date": "2024-10-13T04:11:56.070Z"
    }
]
```


On frontend (live preview in https://localhost:3000), please implement (in `App.tsx`):

- Show the login button. Clicking the login button will perform the login by calling the `/login` endpoint
- Once the user is logged in, show the `Table` component (from the `table.tsx`) and hide the login button. We'll need to integrate with `/data` endpoint to show the paginated data with page size default to 10.
- Add a logout button below the table to perform the `/logout` function

## Other requirements:

- Share your entire screen the entire time of the interview
- The interviewer will share the screen for the live preview of the demo app
