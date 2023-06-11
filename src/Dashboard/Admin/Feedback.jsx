import { useParams } from "react-router-dom";

const Feedback = () => {
    const { id } = useParams();
    console.log(id);
    const handleFeedbackSubmit = (event) => {
        event.preventDefault();
        const feedback = event.target.feedback.value;
        console.log(feedback);

        fetch(`https://assignment-twelve-server-smoky.vercel.app/classes/feedback/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ feedback }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log('Feedback updated:', data);
                event.target.reset();
                window.history.back();
            })
            .catch((error) => {
                console.error('Error updating feedback:', error);
            });
    };
    return (
        <div>
            <form onSubmit={handleFeedbackSubmit}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Feedback</span>
                    </label>
                    <input type="text" name="feedback" placeholder="Feedback" className="input input-bordered"
                    />

                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Send</button>
                </div>
            </form>
        </div>
    );
};

export default Feedback;