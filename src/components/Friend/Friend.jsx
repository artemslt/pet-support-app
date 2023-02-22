import {
  Card,
  CardTitle,
  CardInfo,
  CardPhoto,
  CardData,
  CardDataItem,
} from './Friend.styled';

import notfound from './notfound.jpg';

export const Friend = ({ _id, title, url, imageUrl, addressUrl, address, email, phone, workDays }) => {
    const today = new Date().getDay();
    const hours = workDays?.[today]?.isOpen ? `${workDays[today].from} - ${workDays[today].to}` : null;
    return (
      <Card key={_id}>
        <CardTitle href={url} target="_blank" rel="noreferrer">{title}</CardTitle>
        <CardInfo>
          <CardPhoto>
            <img src={imageUrl || notfound} alt="partner logo" />
          </CardPhoto>
          <CardData>
            <ul>
              <CardDataItem>
                <span>Time:</span>
                <div>
      {hours ? (
        <span>{hours}</span>
      ) : (
        <span>-----------------------------</span>
      )}
    </div>
              </CardDataItem>
              <CardDataItem>
                <span>Address:</span>
                {address ? (
                  <span>
                    <a href={addressUrl ?? '#'} target="_blank" rel="noreferrer">
                      {address}
                    </a>
                  </span>
                ) : (
                  <span>-----------------------------</span>
                )}
              </CardDataItem>
              <CardDataItem>
                <span>Email:</span>
                {email ? (
                  <span>
                    <a href={`mailto:${email}`}>{email}</a>
                  </span>
                ) : (
                  <span>-----------------------------</span>
                )}
              </CardDataItem>
              <CardDataItem>
                <span>Phone:</span>
                {phone ? (
                  <span>
                    <a href={`tel:${phone}`}>{phone}</a>
                  </span>
                ) : (
                  <span>-----------------------------</span>
                )}
              </CardDataItem>
            </ul>
          </CardData>
        </CardInfo>
      </Card>
    );
  };
  