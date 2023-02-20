import {
  Card,
  CardTitle,
  CardInfo,
  CardPhoto,
  CardData,
  CardDataItem,
} from './Friend.styled';


export const Friend = ({ _id, title, imageUrl, addressUrl, address, email, phone, }) => {
    return (
            <Card key={_id}>
                <CardTitle>{title}</CardTitle>
                <CardInfo>
                <CardPhoto>
                    {/* поки що спрвжню заглушку не поставив,а обрав з логотипів  */}
                        <img src={imageUrl || 'https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_288.png'} alt="partner logo" />
                    </CardPhoto>
                    <CardData>
                        <ul>
                            <CardDataItem>
                                <span>Time:</span>
                                <span>-----------------------------</span>
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
}