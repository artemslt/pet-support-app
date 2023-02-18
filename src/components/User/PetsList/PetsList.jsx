export const PetsList = () => {
  return (
    <div>
      <div>
        <h3>My pets:</h3>
        <div>
          <span>Add pet</span>
          <button type="button"></button>
        </div>
      </div>
      <div>
        <div>
          <img src="" alt="" />
        </div>

        <div>
          <div>
            <p>
              <span>Name:</span>{' '}
            </p>
            <p>
              <span>Date of birth:</span>{' '}
            </p>
            <p>
              <span>Breed:</span>{' '}
            </p>
            <p>
              <span>Comments:</span>{' '}
            </p>
          </div>
          <button type="button">Delete</button>
        </div>
      </div>
    </div>
  );
};
