import React from "react";
import { Image, Typography } from 'antd'
import { useParams, useHistory, useLocation, useRouteMatch, withRouter, RouteComponentProps, Link } from 'react-router-dom'

interface ProductImageProps extends RouteComponentProps {
  id: string | number;
  size: 'large' | 'small';
  title: string;
  imageSrc: string;
  price: string | number;
}

const ProductImageComponent: React.FC<ProductImageProps> = ({ id, size, title, imageSrc, price, history }) => {
  // const param = useParams();
  // const location = useLocation();
  // const history = useHistory();
  // const match = useRouteMatch();

  // return <Link to={`detail/${id}`}>
  //   {size === 'large' ?
  //     <Image src={imageSrc} height={285} width={490} /> :
  //     <Image src={imageSrc} height={120} width={240} />
  //   }
  //   <div>
  //     <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
  //     <Typography.Text type='danger' strong>{price}</Typography.Text>
  //   </div>
  // </Link>
  return (
    <div onClick={() => { console.log(234); history.push(`detail/${id}`) }}>
      {size === 'large' ?
        <Image src={imageSrc} height={285} width={490} /> :
        <Image src={imageSrc} height={120} width={240} />
      }
      <div>
        <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
        <Typography.Text type='danger' strong>{price}</Typography.Text>
      </div>
    </div>
  )
}
export const ProductImage = withRouter(ProductImageComponent)