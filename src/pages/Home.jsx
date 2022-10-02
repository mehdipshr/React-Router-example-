import React from 'react'

export default function Home() {
  return (
    <div>
      <form>
  <fieldset>
    <legend>Legend</legend>
    <div className="form-group row">
      <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
      <div className="col-sm-10">
        <input type="text" readonly="" className="form-control-plaintext" id="staticEmail" value="email@example.com"/>
      </div>
    </div>
    <div className="form-group">
      <label for="exampleInputEmail1" className="form-label mt-4">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
      <label for="exampleInputPassword1" className="form-label mt-4">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
    </div>
    <div className="form-group">
      <label for="exampleSelect1" className="form-label mt-4">Example select</label>
      <select className="form-select" id="exampleSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div className="form-group">
      <label for="exampleSelect2" className="form-label mt-4">Example multiple select</label>
      <select multiple="" className="form-select" id="exampleSelect2">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div className="form-group">
      <label for="exampleTextarea" className="form-label mt-4">Example textarea</label>
      <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
    </div>
    <div className="form-group">
      <label for="formFile" className="form-label mt-4">Default file input example</label>
      <input className="form-control" type="file" id="formFile"/>
    </div>
    <fieldset className="form-group">
      <legend className="mt-4">Radio buttons</legend>
      <div className="form-check">
        <label className="form-check-label">
          <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="option1" checked=""/>
          Option one is this and that—be sure to include why it's great
        </label>
      </div>
      <div className="form-check">
        <label className="form-check-label">
          <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="option2"/>
          Option two can be something else and selecting it will deselect option one
        </label>
      </div>
      <div className="form-check disabled">
        <label className="form-check-label">
          <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios3" value="option3" disabled=""/>
          Option three is disabled
        </label>
      </div>
    </fieldset>
    <fieldset className="form-group">
      <legend className="mt-4">Checkboxes</legend>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" for="flexCheckDefault">
          Default checkbox
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked=""/>
        <label className="form-check-label" for="flexCheckChecked">
          Checked checkbox
        </label>
      </div>
    </fieldset>
    <fieldset>
      <legend className="mt-4">Switches</legend>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked=""/>
        <label className="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
      </div>
    </fieldset>
    <button type="submit" className="btn btn-primary">Submit</button>
  </fieldset>
</form>
    </div>
  )
}
