import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import { colors } from '../../constants';
import GridItem from './gridItem';
function ProductGridView(props) {
  const [products, setProducts] = useState([
    {
      url: 'https://tinhocanhphat.vn/media/product/19308_vo_case_lian_li_011_dynamic_evo_white___011dew.jpg',
      price: 2000,
      name: 'PC GAMING Z790',
      specifications: [
        'CPU CORE I9',
        'RAM 64GB',
        'VGA Nvidia GeForce RTX 3080',
      ],
      reviews: 1000,
      stars: 5,
    },
    {
      url: 'https://kenhtinhoc.vn/wp-content/uploads/2022/02/pc-gaming-g220-kenh-tin-hoc-core-i5-10600k-16gb-180gb-ssd-1tb-hdd-rtx3070-8gb-1.jpg',
      price: 2500,
      name: 'PC GAMING G220',
      specifications: ['CPU CORE I9', 'RAM 1TB', 'VGA Nvidia GeForce RTX 3080'],
      reviews: 5000,
      stars: 5,
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQW_kKqvJOXXsAf8BsNaYIsOohkeoO5LZLSdR7uLd4l7ypC4SyTjAHwkrfaBI-oUE4U0D9oi8jObc5EqWA-BZg7GxxU7JJz4us5HAWqH8vzjKmxsysccl3J&usqp=CAc',
      price: 1000,
      name: 'PC GAMING Aegis',
      specifications: ['CPU CORE I5', 'RAM 32GB', 'VGA GeForce GTX 1660 Super'],
      reviews: 500,
      stars: 4,
    },
    {
      url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRWESIsZyuQyfbw3KkeoyqVsNS42SvAPG-sBzRIabRJGfpXZMX3342Txas25arXz9NOpqI5ZjRHBkq-5w-7--dmbOwz49dfH5H9fn_7yar_dE9kDWvgmGBWBA&usqp=CAc',
      price: 1893,
      name: 'PC GAMING B52',
      specifications: ['CPU CORE I9', 'RAM 32GB', 'VGA MSI GeForce RTX 4070'],
      reviews: 1000,
      stars: 3,
    },
    {
      url: 'https://minhducpc.vn/uploads/product/Case-Viettech-s191.webp',
      price: 167,
      name: 'PC GAMING A550',
      specifications: ['CPU CORE I5', 'RAM 8GB', 'VGA GTX 750Ti 2GB GDDR5'],
      reviews: 100,
      stars: 4,
    },
    {
      url: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSorz_OIOqW8if4QpIgS5WokhxzNwf3Si4tCX1AmlaB3XBUFM9BAlSx2_22ppgMtfbVwByv3yz1q04f6mfPe_Dlw_OCXYfv_s1cn5YbYMEyb3UIrphmYy1UpQ&usqp=CAc',
      price: 600,
      name: 'PC GAMING C150',
      specifications: [
        'CPU CORE I5',
        'RAM 16GB',
        'VGA RTX 2060 SUPER 8GB DDR6( ĐÃ QUA SỬ DỤNG)',
      ],
      reviews: 10,
      stars: 2,
    },
    {
      url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRKb2WttWOdGXJEtfpBeYAED8MtG-H-6SYdbfz4M1JN2zWDtDSwezxn1-d16H4ExC0Z6vMNWf5q8MqOg0_oET679KrxBFp1TTtGsjkmIB9j30miPJaBaNEl&usqp=CAc',
      price: 4500,
      name: 'PC Xgear MPG9',
      specifications: [
        'CPU CORE I9',
        'RAM 32GB',
        'VGA MSI RTX 4090 Gaming X Trio',
      ],
      reviews: 200,
      stars: 5,
    },
    {
      url: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTD4Y3UgXZH9RLPv-X2zQVPA75kwK3aXqlx1Ck6ng-7EHHZ1l3eWJqv0pvBwdWqTRwpen5nV6ONuUW9ow_WZXchf6taHtWJMSXqjv-4Nn3jgfJVw9ynJIdVsA&usqp=CAc',
      price: 2499,
      name: 'PC GAMING NUE',
      specifications: [
        'CPU CORE I7',
        'RAM 64GB',
        'VGA NVIDIA GeForce RTX 4070',
      ],
      reviews: 350,
      stars: 4,
    },
  ]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white
      }}>
      <FlatList
        style={{marginTop: 35}}
        data={products}
        //số cột dùng
        numColumns={2}
        keyExtractor={item => item.name}
        renderItem={({item, index}) => (
          <GridItem
            item={item}
            index={index}
            onPress={() => {
              //nhân bản ra một cái mới và làm việc với nó
              let clonedProducts = products.map(eachProduct => {
                if (item.name == eachProduct.name) {
                  return {
                    ...eachProduct,
                    isSaved:
                      item.isSaved == undefined || item.isSaved == false
                        ? true
                        : false,
                  };
                }
                return eachProduct;
              });
              setProducts(clonedProducts);
            }}
          />
        )}
      />
    </View>
  );
}

export default ProductGridView;
