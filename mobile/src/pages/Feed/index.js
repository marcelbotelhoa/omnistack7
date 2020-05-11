import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import io from 'socket.io-client';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import styles from './styles'

import more from '../../assets/more.png'
import like from '../../assets/like.png'
import comment from '../../assets/comment.png'
import send from '../../assets/send.png'

export default Feed = () => {
  const [feeds, setFeeds] = useState([]);

    async function loadFeeds() {
    const res = await api.get('posts')
    setFeeds(res.data)
    }

  function registerToSocket() {
    const socket = io('http://10.0.2.2:3333/')

    socket.on('post', newPost => {
      setFeeds([newPost, ... feeds])
    })

    socket.on('like', likePost => {
     // if (feeds, length > 0) {
        setFeeds(feeds.map(
          post => post._id = likePost._id ? likePost : post
        ))
     // }
    })
  }
  registerToSocket()

  useEffect(() => {
    loadFeeds();
  }, []);

  function handleLike (id) {
    api.post(`posts/${id}/like`)
  }
  
  return (
    <View style={styles.container}>
      <FlatList
        data={feeds}
        keyExtractor={feed => String(feed._id)}
        renderItem={({ item: feed }) => (
          <View style={styles.feedItem}>
            <View style={styles.feedItemHeader}>
              <View style={styles.userInfo}>
                <Text style={styles.name}>{feed.author}</Text>
                <Text style={styles.place}>{feed.place}</Text>
              </View>

              <Image source={more} />
            </View>

            <Image style={styles.feedImage} source={{ uri: `http://10.0.2.2:3333/files/${feed.image}` }} />

            <View style={styles.feedItemFooter} >
              <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={() => handleLike(feed._id)}>
                  <Image source={like} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.action} onPress={() => { }}>
                  <Image source={comment} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.action} onPress={() => { }}>
                  <Image source={send} />
                </TouchableOpacity>
              </View>

              <Text style={styles.likes}>{feed.likes} curtidas</Text>
              <Text style={styles.description}>{feed.description}</Text>
              <Text style={styles.hashtags}>{feed.hashtags}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
