const notesList = [
  {
    id: 1,
    title: "Coding JavaScript",
    createdAt: "2024-03-13T20:43:34.067Z",
    completed: false,
  },
  {
    id: 2,
    title: "Study physics",
    createdAt: "2024-02-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 3,
    title: "React.js intervew",
    createdAt: "2024-01-13T20:43:34.067Z",
    completed: true,
  },
  {
    id: 4,
    title: "Cooking",
    createdAt: "2024-04-13T20:43:34.067Z",
    completed: false,
  },
];

function sortAndFilterNotes(notesList, isAscending, filterCompleted) {
  const filteredNotes = notesList.filter(
    (note) => note.completed === filterCompleted
  );

  return filteredNotes.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return isAscending ? dateA - dateB : dateB - dateA;
  });
}

const filteredAndSortedAscending = sortAndFilterNotes(notesList, true, true);
const filteredAndSortedDescending = sortAndFilterNotes(notesList, false, false);
