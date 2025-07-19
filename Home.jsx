<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <title>Home</title>
</head>
<body>

    <div id="Greetings"> </div>

    <script type="text/babel">
    fuction greetings(){
        return <H1>Hello, my name is Jacob Green, I am a Software and VR App Tester from Czech Republic.<br>This is my Portfolio Website</br></H1>
    }
    const container = document.getelemetById('Greetings');
    const root = ReactDOM.createRoot(container);
    root.render(<greetings/>)
    </script>

</body>
</html>