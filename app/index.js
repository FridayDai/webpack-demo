/**
 * Created by yi.dai on 2017/9/25.
 */
import Sum from './sum.js';
import './style.css';
import testImg from '../image/test.jpeg';

const container = document.getElementById('container');
const sumNode = document.createElement('div');
sumNode.id = 'test';
sumNode.text = Sum.add(1,2);
container.appendChild(sumNode);

const img = document.createElement('img');
img.src = testImg;
container.appendChild(img);