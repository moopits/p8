

// Créez un composant fonctionnel pour la balise <p>
const UpdateableParagraph = ({item}) => {
    const [condition, setCondition] = useState(false);
    const [text, setText] = useState('Cliquez pour changer l\'état en TRUE');

    const handleClick = () => {
        console.log(condition)
        setCondition(!condition);
        console.log(condition)
        setText(condition ? 'Cliquez pour changer l\'état en FALSE' : 'Cliquez pour changer l\'état en TRUE');
    };

    return (
        <p onClick={handleClick}>
        {text}
        </p>
    );
};

export default UpdateableParagraph

/*const ExampleComponent = () => {
  return (
    <div>
      <UpdateableParagraph />
    </div>
  );
};*/