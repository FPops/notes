import ReactMarkdown from "react-markdown";

function Main({ activeNote, onUpdateNote }){
    if (!activeNote) return <div className="no-active-note">No Active Note</div>;

    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]:value,
            lastModified: Date.now(),
        })
    };  


    return <div className="app-main">
        <div className="app-main-note-edit">
            <input type="text" id='title' value={activeNote.tile} onChange={(e)=> onEditField("title", e.target.value)} autoFocus />
            <textarea placeholder="Notes" id="body" cols="30" rows="10" value={activeNote.body} onChange={(e)=> onEditField("body", e.target.value)}></textarea>
        </div>


        <div className="app-main-note-preview">
            <h1 className="preview-title">{activeNote.title}</h1>
            <ReactMarkdown className="markdown-preview">{activeNote.body}</ReactMarkdown>

        </div>
    </div>
}

export default Main;