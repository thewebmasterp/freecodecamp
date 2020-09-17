const frontEndFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
];
  
function Frameworks() {
    const renderFrameworks = frontEndFrameworks.map((el, i) => {
      return <li key={i} >{el}</li>
    })
    return (
      <div>
        <h1>Popular Front End JavaScript Frameworks</h1>
        <ul>
          {renderFrameworks}
        </ul>
      </div>
    );
};
  