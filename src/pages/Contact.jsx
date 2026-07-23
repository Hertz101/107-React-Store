function Contact() {
    return (
        <form>
            <p className="fs-2 fw-bold">Contact Us</p>
            <div className="mb-3 fw-bold">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3 fw-bold">
                <label for="exampleInputPassword1" class="form-label">Phone number</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            
            <div class="form-floating mt-4">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Brief Description</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}

export default Contact;