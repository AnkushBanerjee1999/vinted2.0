import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    title: 'Vintage Levi\'s 501 Straight Jeans',
    brand: 'Levi\'s',
    category: 'jeans',
    price: 45.00,
    originalPrice: 89.99,
    discount: 50,
    size: 'M',
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    location: 'Berlin, Germany',
    seller: {
      name: 'Emma Wilson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  },
  {
    id: '2',
    title: 'Silk Floral Midi Dress',
    brand: 'Zara',
    category: 'dresses',
    price: 32.00,
    originalPrice: 59.99,
    discount: 47,
    size: 'S',
    image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    location: 'Paris, France',
    seller: {
      name: 'Maria Garcia',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  },
  {
    id: '3',
    title: 'Cashmere Knit Sweater',
    brand: 'COS',
    category: 'tops',
    price: 65.00,
    originalPrice: 120.00,
    discount: 46,
    size: 'M',
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.9,
    location: 'Amsterdam, Netherlands',
    seller: {
      name: 'Sophie Chen',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  },
  {
    id: '4',
    title: 'Leather Ankle Boots',
    brand: 'Dr. Martens',
    category: 'shoes',
    price: 89.00,
    originalPrice: 160.00,
    discount: 44,
    size: '38',
    image: 'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.7,
    location: 'London, UK',
    seller: {
      name: 'James Thompson',
      avatar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  },
  {
    id: '5',
    title: 'Designer Crossbody Bag',
    brand: 'Michael Kors',
    category: 'accessories',
    price: 78.00,
    originalPrice: 195.00,
    discount: 60,
    size: 'One Size',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.5,
    location: 'Milan, Italy',
    seller: {
      name: 'Isabella Rossi',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  },
  {
    id: '6',
    title: 'Oversized Blazer',
    brand: 'H&M',
    category: 'tops',
    price: 28.00,
    originalPrice: 49.99,
    discount: 44,
    size: 'L',
    image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.3,
    location: 'Stockholm, Sweden',
    seller: {
      name: 'Anna Larsson',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  },
  {
    id: '7',
    title: 'High-Waisted Mom Jeans',
    brand: 'Urban Outfitters',
    category: 'jeans',
    price: 42.00,
    originalPrice: 79.00,
    discount: 47,
    size: 'S',
    image: 'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.6,
    location: 'Barcelona, Spain',
    seller: {
      name: 'Carmen Silva',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  },
  {
    id: '8',
    title: 'Pleated Mini Skirt',
    brand: 'ASOS',
    category: 'dresses',
    price: 18.00,
    originalPrice: 35.00,
    discount: 49,
    size: 'XS',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.2,
    location: 'Copenhagen, Denmark',
    seller: {
      name: 'Maja Nielsen',
      avatar: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  },
  {
    id: '9',
    title: 'Wool Trench Coat',
    brand: 'Mango',
    category: 'tops',
    price: 95.00,
    originalPrice: 179.99,
    discount: 47,
    size: 'M',
    image: 'https://images.pexels.com/photos/1381553/pexels-photo-1381553.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.8,
    location: 'Brussels, Belgium',
    seller: {
      name: 'Léa Dubois',
      avatar: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  },
  {
    id: '10',
    title: 'Vintage Band T-Shirt',
    brand: 'Vintage',
    category: 'tops',
    price: 22.00,
    size: 'L',
    image: 'https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.4,
    location: 'Vienna, Austria',
    seller: {
      name: 'Klaus Mueller',
      avatar: 'https://images.pexels.com/photos/1840608/pexels-photo-1840608.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  },
  {
    id: '11',
    title: 'Strappy Heeled Sandals',
    brand: 'Zara',
    category: 'shoes',
    price: 35.00,
    originalPrice: 69.95,
    discount: 50,
    size: '37',
    image: 'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.1,
    location: 'Lisbon, Portugal',
    seller: {
      name: 'Ana Santos',
      avatar: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  },
  {
    id: '12',
    title: 'Statement Earrings',
    brand: '& Other Stories',
    category: 'accessories',
    price: 12.00,
    originalPrice: 29.00,
    discount: 59,
    size: 'One Size',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 4.3,
    location: 'Prague, Czech Republic',
    seller: {
      name: 'Tereza Novak',
      avatar: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  }
];

export const featuredProducts = products.slice(0, 8);