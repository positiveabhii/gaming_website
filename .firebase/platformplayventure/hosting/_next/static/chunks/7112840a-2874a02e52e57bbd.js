"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{19:function(e,t,r){r.d(t,{IO:function(){return iv},JU:function(){return n4},PL:function(){return iU},QT:function(){return iF},TQ:function(){return iD},Xo:function(){return iC},ad:function(){return n8},ar:function(){return iE},b9:function(){return iS},hJ:function(){return n2}});var n,i,s=r(5816),a=r(8463),o=r(3333),l=r(4444),u=r(6640);r(3454);let h="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d="10.7.0",f=new o.Yd("@firebase/firestore");function m(){return f.logLevel}function g(e,...t){if(f.logLevel<=o.in.DEBUG){let r=t.map(w);f.debug(`Firestore (${d}): ${e}`,...r)}}function p(e,...t){if(f.logLevel<=o.in.ERROR){let r=t.map(w);f.error(`Firestore (${d}): ${e}`,...r)}}function y(e,...t){if(f.logLevel<=o.in.WARN){let r=t.map(w);f.warn(`Firestore (${d}): ${e}`,...r)}}function w(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e="Unexpected state"){let t=`FIRESTORE (${d}) INTERNAL ASSERTION FAILED: `+e;throw p(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class C{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(c.UNAUTHENTICATED))}shutdown(){}}class A{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class S{constructor(e){this.t=e,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),i=new T;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new T,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},a=e=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new T)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||v(),new I(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||v(),new c(e)}}class N{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=c.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class D{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new N(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class b{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class k{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){let r=e=>{null!=e.error&&g("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.R;return this.R=e.token,g("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?n(e):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||v(),this.R=e.token,new b(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let n=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let t=0;t<e;t++)r[t]=Math.floor(256*Math.random());return r}(40);for(let i=0;i<n.length;++i)r.length<20&&n[i]<t&&(r+=e.charAt(n[i]%e.length))}return r}}function x(e,t){return e<t?-1:e>t?1:0}function L(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new E(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new E(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return V.fromMillis(Date.now())}static fromDate(e){return V.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new V(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?x(this.nanoseconds,e.nanoseconds):x(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.timestamp=e}static fromTimestamp(e){return new O(e)}static min(){return new O(new V(0,0))}static max(){return new O(new V(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e,t,r){void 0===t?t=0:t>e.length&&v(),void 0===r?r=e.length-t:r>e.length-t&&v(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===M.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof M?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=e.get(n),i=t.get(n);if(r<i)return -1;if(r>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class F extends M{construct(e,t,r){return new F(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new E(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new F(t)}static emptyPath(){return new F([])}}let P=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class U extends M{construct(e,t,r){return new U(e,t,r)}static isValidIdentifier(e){return P.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),U.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new U(["__name__"])}static fromServerFormat(e){let t=[],r="",n=0,i=()=>{if(0===r.length)throw new E(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},s=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new E(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new E(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?s=!s:"."!==t||s?r+=t:i(),n++}if(i(),s)throw new E(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new U(t)}static emptyPath(){return new U([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(F.fromString(e))}static fromName(e){return new q(F.fromString(e).popFirst(5))}static empty(){return new q(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===F.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return F.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new F(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,t,r,n){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=n}}B.UNKNOWN_ID=-1;class ${constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new $(O.min(),q.empty(),-1)}static max(){return new $(O.max(),q.empty(),-1)}}class z{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e){if(e.code!==_.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;g("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof K?t:K.resolve(t)}catch(e){return K.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):K.reject(t)}static resolve(e){return new K((t,r)=>{t(e)})}static reject(e){return new K((t,r)=>{r(e)})}static waitFor(e){return new K((t,r)=>{let n=0,i=0,s=!1;e.forEach(e=>{++n,e.next(()=>{++i,s&&i===n&&t()},e=>r(e))}),s=!0,i===n&&t()})}static or(e){let t=K.resolve(!1);for(let r of e)t=t.next(e=>e?K.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new K((r,n)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&r(s)},e=>n(e))}})}static doWhile(e,t){return new K((r,n)=>{let i=()=>{!0===e()?t().next(()=>{i()},n):r()};i()})}}function Q(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.se(e),this.oe=e=>t.writeSequenceNumber(e))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.oe&&this.oe(e),e}}function H(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function Y(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function X(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}j._e=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t){this.comparator=e,this.root=t||ee.EMPTY}insert(e,t){return new J(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ee.BLACK,null,null))}remove(e){return new J(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ee.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Z(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Z(this.root,e,this.comparator,!1)}getReverseIterator(){return new Z(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Z(this.root,e,this.comparator,!0)}}class Z{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ee{constructor(e,t,r,n,i){this.key=e,this.value=t,this.color=null!=r?r:ee.RED,this.left=null!=n?n:ee.EMPTY,this.right=null!=i?i:ee.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,i){return new ee(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,i=r(e,n.key);return(n=i<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===i?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return ee.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw v();let e=this.left.check();if(e!==this.right.check())throw v();return e+(this.isRed()?0:1)}}ee.EMPTY=null,ee.RED=!0,ee.BLACK=!1,ee.EMPTY=new class{constructor(){this.size=0}get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(e,t,r,n,i){return this}insert(e,t,r){return new ee(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.comparator=e,this.data=new J(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new er(this.data.getIterator())}getIteratorFrom(e){return new er(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new et(this.comparator);return t.data=e,t}}class er{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.fields=e,e.sort(U.comparator)}static empty(){return new en([])}unionWith(e){let t=new et(U.comparator);for(let e of this.fields)t=t.add(e);for(let r of e)t=t.add(r);return new en(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return L(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.binaryString=e}static fromBase64String(e){return new es(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new ei("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new es(function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return x(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}es.EMPTY_BYTE_STRING=new es("");let ea=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function eo(e){if(e||v(),"string"==typeof e){let t=0,r=ea.exec(e);if(r||v(),r[1]){let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:el(e.seconds),nanos:el(e.nanos)}}function el(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function eu(e){return"string"==typeof e?es.fromBase64String(e):es.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(e){var t,r;return"server_timestamp"===(null===(r=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===r?void 0:r.stringValue)}function ec(e){let t=e.mapValue.fields.__previous_value__;return eh(t)?ec(t):t}function ed(e){let t=eo(e.mapValue.fields.__local_write_time__.timestampValue);return new V(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,t,r,n,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class em{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new em("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof em&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eg={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ep(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?eh(e)?4:eb(e)?9007199254740991:10:v()}function ey(e,t){if(e===t)return!0;let r=ep(e);if(r!==ep(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ed(e).isEqual(ed(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=eo(e.timestampValue),n=eo(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return eu(e.bytesValue).isEqual(eu(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return el(e.geoPointValue.latitude)===el(t.geoPointValue.latitude)&&el(e.geoPointValue.longitude)===el(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return el(e.integerValue)===el(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=el(e.doubleValue),n=el(t.doubleValue);return r===n?H(r)===H(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return L(e.arrayValue.values||[],t.arrayValue.values||[],ey);case 10:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(W(r)!==W(n))return!1;for(let e in r)if(r.hasOwnProperty(e)&&(void 0===n[e]||!ey(r[e],n[e])))return!1;return!0}(e,t);default:return v()}}function ew(e,t){return void 0!==(e.values||[]).find(e=>ey(e,t))}function ev(e,t){if(e===t)return 0;let r=ep(e),n=ep(t);if(r!==n)return x(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return x(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=el(e.integerValue||e.doubleValue),n=el(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return e_(e.timestampValue,t.timestampValue);case 4:return e_(ed(e),ed(t));case 5:return x(e.stringValue,t.stringValue);case 6:return function(e,t){let r=eu(e),n=eu(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=x(r[e],n[e]);if(0!==t)return t}return x(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=x(el(e.latitude),el(t.latitude));return 0!==r?r:x(el(e.longitude),el(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=ev(r[e],n[e]);if(t)return t}return x(r.length,n.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===eg.mapValue&&t===eg.mapValue)return 0;if(e===eg.mapValue)return 1;if(t===eg.mapValue)return -1;let r=e.fields||{},n=Object.keys(r),i=t.fields||{},s=Object.keys(i);n.sort(),s.sort();for(let e=0;e<n.length&&e<s.length;++e){let t=x(n[e],s[e]);if(0!==t)return t;let a=ev(r[n[e]],i[s[e]]);if(0!==a)return a}return x(n.length,s.length)}(e.mapValue,t.mapValue);default:throw v()}}function e_(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return x(e,t);let r=eo(e),n=eo(t),i=x(r.seconds,n.seconds);return 0!==i?i:x(r.nanos,n.nanos)}function eE(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=eo(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?eu(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,q.fromName(t).toString()):"geoPointValue"in e?(r=e.geoPointValue,`geo(${r.latitude},${r.longitude})`):"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=eE(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let i of t)n?n=!1:r+=",",r+=`${i}:${eE(e.fields[i])}`;return r+"}"}(e.mapValue):v()}function eT(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function eI(e){return!!e&&"integerValue"in e}function eC(e){return!!e&&"arrayValue"in e}function eA(e){return!!e&&"nullValue"in e}function eS(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function eN(e){return!!e&&"mapValue"in e}function eD(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return Y(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=eD(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=eD(e.arrayValue.values[r]);return t}return Object.assign({},e)}function eb(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e){this.value=e}static empty(){return new ek({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!eN(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eD(t)}setAll(e){let t=U.emptyPath(),r={},n=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=i.popLast()}e?r[i.lastSegment()]=eD(e):n.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,r,n)}delete(e){let t=this.field(e.popLast());eN(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ey(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];eN(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(Y(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new ek(eD(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,t,r,n,i,s,a){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new eR(e,0,O.min(),O.min(),O.min(),ek.empty(),0)}static newFoundDocument(e,t,r,n){return new eR(e,1,t,O.min(),r,n,0)}static newNoDocument(e,t){return new eR(e,2,t,O.min(),O.min(),ek.empty(),0)}static newUnknownDocument(e,t){return new eR(e,3,t,O.min(),O.min(),ek.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(O.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ek.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ek.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eR&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eR(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ex{constructor(e,t){this.position=e,this.inclusive=t}}function eL(e,t,r){let n=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(n=s.field.isKeyField()?q.comparator(q.fromName(a.referenceValue),r.key):ev(a,r.data.field(s.field)),"desc"===s.dir&&(n*=-1),0!==n)break}return n}function eV(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!ey(e.position[r],t.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{}class eF extends eM{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new eB(e,t,r):"array-contains"===t?new eK(e,r):"in"===t?new eQ(e,r):"not-in"===t?new ej(e,r):"array-contains-any"===t?new eH(e,r):new eF(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new e$(e,r):new ez(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(ev(t,this.value)):null!==t&&ep(this.value)===ep(t)&&this.matchesComparison(ev(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return v()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class eP extends eM{constructor(e,t){super(),this.filters=e,this.op=t,this.ue=null}static create(e,t){return new eP(e,t)}matches(e){return eU(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function eU(e){return"and"===e.op}function eq(e){for(let t of e.filters)if(t instanceof eP)return!1;return!0}class eB extends eF{constructor(e,t,r){super(e,t,r),this.key=q.fromName(r.referenceValue)}matches(e){let t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class e$ extends eF{constructor(e,t){super(e,"in",t),this.keys=eG("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ez extends eF{constructor(e,t){super(e,"not-in",t),this.keys=eG("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function eG(e,t){var r;return((null===(r=t.arrayValue)||void 0===r?void 0:r.values)||[]).map(e=>q.fromName(e.referenceValue))}class eK extends eF{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return eC(t)&&ew(t.arrayValue,this.value)}}class eQ extends eF{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&ew(this.value.arrayValue,t)}}class ej extends eF{constructor(e,t){super(e,"not-in",t)}matches(e){if(ew(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!ew(this.value.arrayValue,t)}}class eH extends eF{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!eC(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ew(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eW{constructor(e,t=null,r=[],n=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=i,this.startAt=s,this.endAt=a,this.ce=null}}function eY(e,t=null,r=[],n=[],i=null,s=null,a=null){return new eW(e,t,r,n,i,s,a)}function eX(e){if(null===e.ce){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof eF)return t.field.canonicalString()+t.op.toString()+eE(t.value);if(eq(t)&&eU(t))return t.filters.map(t=>e(t)).join(",");{let r=t.filters.map(t=>e(t)).join(",");return`${t.op}(${r})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>eE(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>eE(e)).join(",")),e.ce=t}return e.ce}function eJ(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var r,n;if(r=e.orderBy[i],n=t.orderBy[i],!(r.dir===n.dir&&r.field.isEqual(n.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!function e(t,r){return t instanceof eF?r instanceof eF&&t.op===r.op&&t.field.isEqual(r.field)&&ey(t.value,r.value):t instanceof eP?r instanceof eP&&t.op===r.op&&t.filters.length===r.filters.length&&t.filters.reduce((t,n,i)=>t&&e(n,r.filters[i]),!0):void v()}(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eV(e.startAt,t.startAt)&&eV(e.endAt,t.endAt)}function eZ(e){return q.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,t=null,r=[],n=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function e1(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function e2(e){return null!==e.collectionGroup}function e4(e){if(null===e.le){let t;e.le=[];let r=new Set;for(let t of e.explicitOrderBy)e.le.push(t),r.add(t.field.canonicalString());let n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new et(U.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{r.has(t.canonicalString())||t.isKeyField()||e.le.push(new eO(t,n))}),r.has(U.keyField().canonicalString())||e.le.push(new eO(U.keyField(),n))}return e.le}function e3(e){return e.he||(e.he=function(e,t){if("F"===e.limitType)return eY(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new eO(e.field,t)});let r=e.endAt?new ex(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new ex(e.startAt.position,e.startAt.inclusive):null;return eY(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}(e,e4(e))),e.he}function e9(e,t){let r=e.filters.concat([t]);return new e0(e.path,e.collectionGroup,e.explicitOrderBy.slice(),r,e.limit,e.limitType,e.startAt,e.endAt)}function e8(e,t,r){return new e0(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function e6(e,t){return eJ(e3(e),e3(t))&&e.limitType===t.limitType}function e5(e){return`${eX(e3(e))}|lt:${e.limitType}`}function e7(e){var t;let r;return`Query(target=${r=(t=e3(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof eF?`${t.field.canonicalString()} ${t.op} ${eE(t.value)}`:t instanceof eP?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>eE(e)).join(",")),t.endAt&&(r+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>eE(e)).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function te(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):q.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of e4(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let n=eL(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,e4(e),t))&&(!e.endAt||!!function(e,t,r){let n=eL(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,e4(e),t))}function tt(e){return(t,r)=>{let n=!1;for(let i of e4(e)){let e=function(e,t,r){let n=e.field.isKeyField()?q.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),i=r.data.field(e);return null!==n&&null!==i?ev(n,i):v()}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return v()}}(i,t,r);if(0!==e)return e;n=n||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){Y(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return X(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tn=new J(q.comparator),ti=new J(q.comparator);function ts(...e){let t=ti;for(let r of e)t=t.insert(r.key,r);return t}function ta(){return new tr(e=>e.toString(),(e,t)=>e.isEqual(t))}new J(q.comparator);let to=new et(q.comparator);function tl(...e){let t=to;for(let r of e)t=t.add(r);return t}let tu=new et(x);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:H(t)?"-0":t}}function tc(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(){this._=void 0}}class tf extends td{}class tm extends td{constructor(e){super(),this.elements=e}}function tg(e,t){let r=t_(t);for(let t of e.elements)r.some(e=>ey(e,t))||r.push(t);return{arrayValue:{values:r}}}class tp extends td{constructor(e){super(),this.elements=e}}function ty(e,t){let r=t_(t);for(let t of e.elements)r=r.filter(e=>!ey(e,t));return{arrayValue:{values:r}}}class tw extends td{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function tv(e){return el(e.integerValue||e.doubleValue)}function t_(e){return eC(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class tE{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new tE}static exists(e){return new tE(void 0,e)}static updateTime(e){return new tE(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tT(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class tI{}function tC(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new tx(e.key,tE.none()):new tN(e.key,e.data,tE.none());{let r=e.data,n=ek.empty(),i=new et(U.comparator);for(let e of t.fields)if(!i.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),i=i.add(e)}return new tD(e.key,n,new en(i.toArray()),tE.none())}}function tA(e,t,r,n){return e instanceof tN?function(e,t,r,n){if(!tT(e.precondition,t))return r;let i=e.value.clone(),s=tR(e.fieldTransforms,n,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,r,n):e instanceof tD?function(e,t,r,n){if(!tT(e.precondition,t))return r;let i=tR(e.fieldTransforms,n,t),s=t.data;return(s.setAll(tb(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):tT(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function tS(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&L(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof tm&&n instanceof tm||r instanceof tp&&n instanceof tp?L(r.elements,n.elements,ey):r instanceof tw&&n instanceof tw?ey(r.Ie,n.Ie):r instanceof tf&&n instanceof tf)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tN extends tI{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class tD extends tI{constructor(e,t,r,n,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function tb(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function tk(e,t,r){var n;let i=new Map;e.length===r.length||v();for(let s=0;s<r.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(n=r[s],o instanceof tm?tg(o,l):o instanceof tp?ty(o,l):n))}return i}function tR(e,t,r){let n=new Map;for(let i of e){let e=i.transform,s=r.data.field(i.field);n.set(i.field,e instanceof tf?function(e,t){let r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&eh(t)&&(t=ec(t)),t&&(r.fields.__previous_value__=t),{mapValue:r}}(t,s):e instanceof tm?tg(e,s):e instanceof tp?ty(e,s):function(e,t){var r,n;let i=(r=e,n=t,r instanceof tw?eI(n)||n&&"doubleValue"in n?n:{integerValue:0}:null),s=tv(i)+tv(e.Ie);return eI(i)&&eI(e.Ie)?tc(s):th(e.serializer,s)}(e,s))}return n}class tx extends tI{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var n;n=r[t],i instanceof tN?function(e,t,r){let n=e.value.clone(),i=tk(e.fieldTransforms,t,r.transformResults);n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(i,e,n):i instanceof tD?function(e,t,r){if(!tT(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=tk(e.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(tb(e)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(i,e,n):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=tA(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=tA(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=ta();return this.mutations.forEach(n=>{let i=e.get(n.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields),o=tC(s,a=t.has(n.key)?null:a);null!==o&&r.set(n.key,o),s.isValidDocument()||s.convertToNoDocument(O.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),tl())}isEqual(e){return this.batchId===e.batchId&&L(this.mutations,e.mutations,(e,t)=>tS(e,t))&&L(this.baseMutations,e.baseMutations,(e,t)=>tS(e,t))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e,t){this.count=e,this.unchangedNames=t}}function tM(e){if(void 0===e)return p("GRPC error has no .code"),_.UNKNOWN;switch(e){case n.OK:return _.OK;case n.CANCELLED:return _.CANCELLED;case n.UNKNOWN:return _.UNKNOWN;case n.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case n.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case n.INTERNAL:return _.INTERNAL;case n.UNAVAILABLE:return _.UNAVAILABLE;case n.UNAUTHENTICATED:return _.UNAUTHENTICATED;case n.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case n.NOT_FOUND:return _.NOT_FOUND;case n.ALREADY_EXISTS:return _.ALREADY_EXISTS;case n.PERMISSION_DENIED:return _.PERMISSION_DENIED;case n.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case n.ABORTED:return _.ABORTED;case n.OUT_OF_RANGE:return _.OUT_OF_RANGE;case n.UNIMPLEMENTED:return _.UNIMPLEMENTED;case n.DATA_LOSS:return _.DATA_LOSS;default:return v()}}(i=n||(n={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tF=new u.z8([4294967295,4294967295],0);function tP(e){let t=(new TextEncoder).encode(e),r=new u.V8;return r.update(t),new Uint8Array(r.digest())}function tU(e){let t=new DataView(e.buffer),r=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new u.z8([r,n],0),new u.z8([i,s],0)]}class tq{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new tB(`Invalid padding: ${t}`);if(r<0||e.length>0&&0===this.hashCount)throw new tB(`Invalid hash count: ${r}`);if(0===e.length&&0!==t)throw new tB(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ee=u.z8.fromNumber(this.Te)}de(e,t,r){let n=e.add(t.multiply(u.z8.fromNumber(r)));return 1===n.compare(tF)&&(n=new u.z8([n.getBits(0),n.getBits(1)],0)),n.modulo(this.Ee).toNumber()}Ae(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Te)return!1;let[t,r]=tU(tP(e));for(let e=0;e<this.hashCount;e++){let n=this.de(t,r,e);if(!this.Ae(n))return!1}return!0}static create(e,t,r){let n=new tq(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return r.forEach(e=>n.insert(e)),n}insert(e){if(0===this.Te)return;let[t,r]=tU(tP(e));for(let e=0;e<this.hashCount;e++){let n=this.de(t,r,e);this.Re(n)}}Re(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class tB extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t${constructor(e,t,r,n,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,tz.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new t$(O.min(),n,new J(x),tn,tl())}}class tz{constructor(e,t,r,n,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new tz(r,t,tl(),tl(),tl())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tG{constructor(e,t,r,n){this.Ve=e,this.removedTargetIds=t,this.key=r,this.me=n}}class tK{constructor(e,t){this.targetId=e,this.fe=t}}class tQ{constructor(e,t,r=es.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class tj{constructor(){this.ge=0,this.pe=tY(),this.ye=es.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return 0!==this.ge}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=tl(),t=tl(),r=tl();return this.pe.forEach((n,i)=>{switch(i){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:v()}}),new tz(this.ye,this.we,e,t,r)}Fe(){this.Se=!1,this.pe=tY()}Me(e,t){this.Se=!0,this.pe=this.pe.insert(e,t)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,this.ge>=0||v()}Be(){this.Se=!0,this.we=!0}}class tH{constructor(e){this.Le=e,this.ke=new Map,this.qe=tn,this.Qe=tW(),this.Ke=new J(x)}$e(e){for(let t of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(t,e.me):this.We(t,e.key,e.me);for(let t of e.removedTargetIds)this.We(t,e.key,e.me)}Ge(e){this.forEachTarget(e,t=>{let r=this.ze(t);switch(e.state){case 0:this.je(t)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(t);break;case 3:this.je(t)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),r.Ce(e.resumeToken));break;default:v()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ke.forEach((e,r)=>{this.je(r)&&t(r)})}Je(e){let t=e.targetId,r=e.fe.count,n=this.Ye(t);if(n){let i=n.target;if(eZ(i)){if(0===r){let e=new q(i.path);this.We(t,e,eR.newNoDocument(e,O.min()))}else 1===r||v()}else{let n=this.Ze(t);if(n!==r){let r=this.Xe(e),i=r?this.et(r,e,n):1;0!==i&&(this.He(t),this.Ke=this.Ke.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}Xe(e){let t,r;let n=e.fe.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=n;try{t=eu(i).toUint8Array()}catch(e){if(e instanceof ei)return y("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{r=new tq(t,s,a)}catch(e){return y(e instanceof tB?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===r.Te?null:r}et(e,t,r){return t.fe.count===r-this.rt(e,t.targetId)?0:2}rt(e,t){let r=this.Le.getRemoteKeysForTarget(t),n=0;return r.forEach(r=>{let i=this.Le.nt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${r.path.canonicalString()}`;e.mightContain(s)||(this.We(t,r,null),n++)}),n}it(e){let t=new Map;this.ke.forEach((r,n)=>{let i=this.Ye(n);if(i){if(r.current&&eZ(i.target)){let t=new q(i.target.path);null!==this.qe.get(t)||this.st(n,t)||this.We(n,t,eR.newNoDocument(t,e))}r.De&&(t.set(n,r.ve()),r.Fe())}});let r=tl();this.Qe.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.Ye(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.qe.forEach((t,r)=>r.setReadTime(e));let n=new t$(e,t,this.Ke,this.qe,r);return this.qe=tn,this.Qe=tW(),this.Ke=new J(x),n}Ue(e,t){if(!this.je(e))return;let r=this.st(e,t.key)?2:0;this.ze(e).Me(t.key,r),this.qe=this.qe.insert(t.key,t),this.Qe=this.Qe.insert(t.key,this.ot(t.key).add(e))}We(e,t,r){if(!this.je(e))return;let n=this.ze(e);this.st(e,t)?n.Me(t,1):n.xe(t),this.Qe=this.Qe.insert(t,this.ot(t).delete(e)),r&&(this.qe=this.qe.insert(t,r))}removeTarget(e){this.ke.delete(e)}Ze(e){let t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let t=this.ke.get(e);return t||(t=new tj,this.ke.set(e,t)),t}ot(e){let t=this.Qe.get(e);return t||(t=new et(x),this.Qe=this.Qe.insert(e,t)),t}je(e){let t=null!==this.Ye(e);return t||g("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){let t=this.ke.get(e);return t&&t.be?null:this.Le._t(e)}He(e){this.ke.set(e,new tj),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}st(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function tW(){return new J(q.comparator)}function tY(){return new J(q.comparator)}let tX={asc:"ASCENDING",desc:"DESCENDING"},tJ={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},tZ={and:"AND",or:"OR"};class t0{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function t1(e,t){return e.useProto3Json||null==t?t:{value:t}}function t2(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function t4(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function t3(e){return e||v(),O.fromTimestamp(function(e){let t=eo(e);return new V(t.seconds,t.nanos)}(e))}function t9(e,t){return new F(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function t8(e){let t=F.fromString(e);return rn(t)||v(),t}function t6(e,t){let r=t8(t);if(r.get(1)!==e.databaseId.projectId)throw new E(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new E(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new q(re(r))}function t5(e,t){return t9(e.databaseId,t)}function t7(e){return new F(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function re(e){return e.length>4&&"documents"===e.get(4)||v(),e.popFirst(5)}function rt(e){return{fieldPath:e.canonicalString()}}function rr(e){return U.fromServerFormat(e.fieldPath)}function rn(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t,r,n,i=O.min(),s=O.min(),a=es.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new ri(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.ut=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(){}ht(e,t){this.Pt(e,t),t.It()}Pt(e,t){if("nullValue"in e)this.Tt(t,5);else if("booleanValue"in e)this.Tt(t,10),t.Et(e.booleanValue?1:0);else if("integerValue"in e)this.Tt(t,15),t.Et(el(e.integerValue));else if("doubleValue"in e){let r=el(e.doubleValue);isNaN(r)?this.Tt(t,13):(this.Tt(t,15),H(r)?t.Et(0):t.Et(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Tt(t,20),"string"==typeof r?t.dt(r):(t.dt(`${r.seconds||""}`),t.Et(r.nanos||0))}else if("stringValue"in e)this.At(e.stringValue,t),this.Rt(t);else if("bytesValue"in e)this.Tt(t,30),t.Vt(eu(e.bytesValue)),this.Rt(t);else if("referenceValue"in e)this.ft(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Tt(t,45),t.Et(r.latitude||0),t.Et(r.longitude||0)}else"mapValue"in e?eb(e)?this.Tt(t,Number.MAX_SAFE_INTEGER):(this.gt(e.mapValue,t),this.Rt(t)):"arrayValue"in e?(this.yt(e.arrayValue,t),this.Rt(t)):v()}At(e,t){this.Tt(t,25),this.wt(e,t)}wt(e,t){t.dt(e)}gt(e,t){let r=e.fields||{};for(let e of(this.Tt(t,55),Object.keys(r)))this.At(e,t),this.Pt(r[e],t)}yt(e,t){let r=e.values||[];for(let e of(this.Tt(t,50),r))this.Pt(e,t)}ft(e,t){this.Tt(t,37),q.fromName(e).path.forEach(e=>{this.Tt(t,60),this.wt(e,t)})}Tt(e,t){e.Et(t)}Rt(e){e.Et(2)}}ra.St=new ra;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.on=new rl}addToCollectionParentIndex(e,t){return this.on.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.on.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve($.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve($.min())}updateCollectionGroup(e,t,r){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class rl{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new et(F.comparator),i=!n.has(r);return this.index[t]=n.add(r),i}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new et(F.comparator)).toArray()}}new Uint8Array(0);class ru{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new ru(e,ru.DEFAULT_COLLECTION_PERCENTILE,ru.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ru.DEFAULT_COLLECTION_PERCENTILE=10,ru.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ru.DEFAULT=new ru(41943040,ru.DEFAULT_COLLECTION_PERCENTILE,ru.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ru.DISABLED=new ru(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new rh(0)}static Nn(){return new rh(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(){this.changes=new tr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eR.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?K.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&tA(r.mutation,e,en.empty(),V.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,tl()).next(()=>t))}getLocalViewOfDocuments(e,t,r=tl()){let n=ta();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=ts();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=ta();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,tl()))}populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let i=tn,s=ta(),a=ta();return t.forEach((e,t)=>{let a=r.get(t.key);n.has(t.key)&&(void 0===a||a.mutation instanceof tD)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),tA(a.mutation,t,a.mutation.getFieldMask(),V.now())):s.set(t.key,en.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var r;return a.set(e,new rd(t,null!==(r=s.get(e))&&void 0!==r?r:null))}),a))}recalculateAndSaveOverlays(e,t){let r=ta(),n=new J((e,t)=>e-t),i=tl();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=r.get(e)||en.empty();a=i.applyToLocalView(s,a),r.set(e,a);let o=(n.get(i.batchId)||tl()).add(e);n=n.insert(i.batchId,o)})}).next(()=>{let s=[],a=n.getReverseIterator();for(;a.hasNext();){let n=a.getNext(),o=n.key,l=n.value,u=ta();l.forEach(e=>{if(!i.has(e)){let n=tC(t.get(e),r.get(e));null!==n&&u.set(e,n),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return K.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r,n){return q.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):e2(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,n):this.getDocumentsMatchingCollectionQuery(e,t,r,n)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(i=>{let s=n-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-i.size):K.resolve(ta()),a=-1,o=i;return s.next(t=>K.forEach(t,(t,r)=>(a<r.largestBatchId&&(a=r.largestBatchId),i.get(t)?K.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,tl())).next(e=>{let t;return{batchId:a,changes:(t=ti,e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t)}}))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(e=>{let t=ts();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r,n){let i=t.collectionGroup,s=ts();return this.indexManager.getCollectionParents(e,i).next(a=>K.forEach(a,a=>{let o=new e0(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,r,n).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,n))).next(e=>{i.forEach((t,r)=>{let n=r.getKey();null===e.get(n)&&(e=e.insert(n,eR.newInvalidDocument(n)))});let r=ts();return e.forEach((e,n)=>{let s=i.get(e);void 0!==s&&tA(s.mutation,n,en.empty(),V.now()),te(t,n)&&(r=r.insert(e,n))}),r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,t){return K.resolve(this.ur.get(t))}saveBundleMetadata(e,t){return this.ur.set(t.id,{id:t.id,version:t.version,createTime:t3(t.createTime)}),K.resolve()}getNamedQuery(e,t){return K.resolve(this.cr.get(t))}saveNamedQuery(e,t){return this.cr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let r,n=function(e){let t=t8(e);return 4===t.length?F.emptyPath():re(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){1===s||v();let e=i.from[0];e.allDescendants?a=e.collectionId:n=n.child(e.collectionId)}let o=[];i.where&&(o=function(e){var t;let r=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=rr(e.unaryFilter.field);return eF.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=rr(e.unaryFilter.field);return eF.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=rr(e.unaryFilter.field);return eF.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=rr(e.unaryFilter.field);return eF.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}(t):void 0!==t.fieldFilter?eF.create(rr(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?eP.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return v()}}(t.compositeFilter.op)):v()}(e);return r instanceof eP&&eq(t=r)&&eU(t)?r.getFilters():[r]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new eO(rr(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=null==(r="object"==typeof(t=i.limit)?t.value:t)?null:r);let h=null;i.startAt&&(h=function(e){let t=!!e.before;return new ex(e.values||[],t)}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before;return new ex(e.values||[],t)}(i.endAt)),new e0(n,a,l,o,u,"F",h,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?e8(t,t.limit,"L"):t}(t.bundledQuery),readTime:t3(t.readTime)}),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(){this.overlays=new J(q.comparator),this.lr=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){let r=ta();return K.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.lt(e,t,n)}),K.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.lr.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.lr.delete(r)),K.resolve()}getOverlaysForCollection(e,t,r){let n=ta(),i=t.length+1,s=new q(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>r&&n.set(e.getKey(),e)}return K.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let i=new J((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=i.get(e.largestBatchId);null===t&&(t=ta(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=ta(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=n)););return K.resolve(a)}lt(e,t,r){let n=this.overlays.get(r.key);if(null!==n){let e=this.lr.get(n.largestBatchId).delete(r.key);this.lr.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new tV(t,r));let i=this.lr.get(t);void 0===i&&(i=tl(),this.lr.set(t,i)),this.lr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(){this.hr=new et(ry.Pr),this.Ir=new et(ry.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,t){let r=new ry(e,t);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.dr(new ry(e,t))}Ar(e,t){e.forEach(e=>this.removeReference(e,t))}Rr(e){let t=new q(new F([])),r=new ry(t,e),n=new ry(t,e+1),i=[];return this.Ir.forEachInRange([r,n],e=>{this.dr(e),i.push(e.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){let t=new q(new F([])),r=new ry(t,e),n=new ry(t,e+1),i=tl();return this.Ir.forEachInRange([r,n],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new ry(e,0),r=this.hr.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class ry{constructor(e,t){this.key=e,this.gr=t}static Pr(e,t){return q.comparator(e.key,t.key)||x(e.gr,t.gr)}static Tr(e,t){return x(e.gr,t.gr)||q.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.pr=1,this.yr=new et(ry.Pr)}checkEmpty(e){return K.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new tL(i,t,r,n);for(let t of(this.mutationQueue.push(s),n))this.yr=this.yr.add(new ry(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return K.resolve(s)}lookupMutationBatch(e,t){return K.resolve(this.wr(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.Sr(t+1),n=r<0?0:r;return K.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(0===this.mutationQueue.length?-1:this.pr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new ry(t,0),n=new ry(t,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,n],e=>{let t=this.wr(e.gr);i.push(t)}),K.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new et(x);return t.forEach(e=>{let t=new ry(e,0),n=new ry(e,Number.POSITIVE_INFINITY);this.yr.forEachInRange([t,n],e=>{r=r.add(e.gr)})}),K.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,i=r;q.isDocumentKey(i)||(i=i.child(""));let s=new ry(new q(i),0),a=new et(x);return this.yr.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(a=a.add(e.gr)),!0)},s),K.resolve(this.br(a))}br(e){let t=[];return e.forEach(e=>{let r=this.wr(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){0===this.Dr(t.batchId,"removed")||v(),this.mutationQueue.shift();let r=this.yr;return K.forEach(t.mutations,n=>{let i=new ry(n.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,t){let r=new ry(t,0),n=this.yr.firstAfterOrEqual(r);return K.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Dr(e,t){return this.Sr(e)}Sr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}wr(e){let t=this.Sr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e){this.Cr=e,this.docs=new J(q.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,n=this.docs.get(r),i=n?n.size:0,s=this.Cr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return K.resolve(r?r.document.mutableCopy():eR.newInvalidDocument(t))}getEntries(e,t){let r=tn;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():eR.newInvalidDocument(e))}),K.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let i=tn,s=t.path,a=new q(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=q.comparator(e.documentKey,t.documentKey))?r:x(e.largestBatchId,t.largestBatchId)}(new $(a.readTime,a.key,-1),r)||(n.has(a.key)||te(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return K.resolve(i)}getAllFromCollectionGroup(e,t,r,n){v()}vr(e,t){return K.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new r_(this)}getSize(e){return K.resolve(this.size)}}class r_ extends rc{constructor(e){super(),this._r=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this._r.addEntry(e,n)):this._r.removeEntry(r)}),K.waitFor(t)}getFromCache(e,t){return this._r.getEntry(e,t)}getAllFromCache(e,t){return this._r.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(e){this.persistence=e,this.Fr=new tr(e=>eX(e),eJ),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.Mr=0,this.Or=new rp,this.targetCount=0,this.Nr=rh.On()}forEachTarget(e,t){return this.Fr.forEach((e,r)=>t(r)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Mr&&(this.Mr=t),K.resolve()}kn(e){this.Fr.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Nr=new rh(t),this.highestTargetId=t),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,t){return this.kn(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.kn(t),K.resolve()}removeTargetData(e,t){return this.Fr.delete(t.target),this.Or.Rr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,r){let n=0,i=[];return this.Fr.forEach((s,a)=>{a.sequenceNumber<=t&&null===r.get(a.targetId)&&(this.Fr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),n++)}),K.waitFor(i).next(()=>n)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){let r=this.Fr.get(t)||null;return K.resolve(r)}addMatchingKeys(e,t,r){return this.Or.Er(t,r),K.resolve()}removeMatchingKeys(e,t,r){this.Or.Ar(t,r);let n=this.persistence.referenceDelegate,i=[];return n&&t.forEach(t=>{i.push(n.markPotentiallyOrphaned(e,t))}),K.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Or.Rr(t),K.resolve()}getMatchingKeysForTargetId(e,t){let r=this.Or.mr(t);return K.resolve(r)}containsKey(e,t){return K.resolve(this.Or.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,t){this.Br={},this.overlays={},this.Lr=new j(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new rE(this),this.indexManager=new ro,this.remoteDocumentCache=new rv(e=>this.referenceDelegate.Qr(e)),this.serializer=new rs(t),this.Kr=new rm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new rg,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Br[e.toKey()];return r||(r=new rw(t,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,t,r){g("MemoryPersistence","Starting transaction:",e);let n=new rI(this.Lr.next());return this.referenceDelegate.$r(),r(n).next(e=>this.referenceDelegate.Ur(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}Wr(e,t){return K.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,t)))}}class rI extends z{constructor(e){super(),this.currentSequenceNumber=e}}class rC{constructor(e){this.persistence=e,this.Gr=new rp,this.zr=null}static jr(e){return new rC(e)}get Hr(){if(this.zr)return this.zr;throw v()}addReference(e,t,r){return this.Gr.addReference(r,t),this.Hr.delete(r.toString()),K.resolve()}removeReference(e,t,r){return this.Gr.removeReference(r,t),this.Hr.add(r.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.Hr.add(t.toString()),K.resolve()}removeTarget(e,t){this.Gr.Rr(t.targetId).forEach(e=>this.Hr.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Hr.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}$r(){this.zr=new Set}Ur(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.Hr,r=>{let n=q.fromPath(r);return this.Jr(e,n).next(e=>{e||t.removeEntry(n,O.min())})}).next(()=>(this.zr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Jr(e,t).next(e=>{e?this.Hr.delete(t.toString()):this.Hr.add(t.toString())})}Qr(e){return 0}Jr(e,t){return K.or([()=>K.resolve(this.Gr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Wr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.ki=r,this.qi=n}static Qi(e,t){let r=tl(),n=tl();for(let e of t.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:n=n.add(e.doc.key)}return new rA(e,t.fromCache,r,n)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,t){this.Gi=e,this.indexManager=t,this.Ki=!0}getDocumentsMatchingQuery(e,t,r,n){let i={result:null};return this.zi(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ji(e,t,n,r).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let r=new rS;return this.Hi(e,t,r).next(n=>{if(i.result=n,this.$i)return this.Ji(e,t,r,n.size)})}).next(()=>i.result)}Ji(e,t,r,n){return r.documentReadCount<this.Ui?(m()<=o.in.DEBUG&&g("QueryEngine","SDK will not create cache indexes for query:",e7(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),K.resolve()):(m()<=o.in.DEBUG&&g("QueryEngine","Query:",e7(t),"scans",r.documentReadCount,"local documents and returns",n,"documents as results."),r.documentReadCount>this.Wi*n?(m()<=o.in.DEBUG&&g("QueryEngine","The SDK decides to create cache indexes for query:",e7(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,e3(t))):K.resolve())}zi(e,t){if(e1(t))return K.resolve(null);let r=e3(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(r=e3(t=e8(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let i=tl(...n);return this.Gi.getDocuments(e,i).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let s=this.Yi(t,n);return this.Zi(t,s,i,r.readTime)?this.zi(e,e8(t,null,"F")):this.Xi(e,s,t,r)}))})))}ji(e,t,r,n){return e1(t)||n.isEqual(O.min())?K.resolve(null):this.Gi.getDocuments(e,r).next(i=>{let s=this.Yi(t,i);return this.Zi(t,s,r,n)?K.resolve(null):(m()<=o.in.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),e7(t)),this.Xi(e,s,t,function(e,t){let r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1;return new $(O.fromTimestamp(1e9===n?new V(r+1,0):new V(r,n)),q.empty(),-1)}(n,0)).next(e=>e))})}Yi(e,t){let r=new et(tt(e));return t.forEach((t,n)=>{te(e,n)&&(r=r.add(n))}),r}Zi(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(n)>0)}Hi(e,t,r){return m()<=o.in.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",e7(t)),this.Gi.getDocumentsMatchingQuery(e,t,$.min(),r)}Xi(e,t,r,n){return this.Gi.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e,t,r,n){this.persistence=e,this.es=t,this.serializer=n,this.ts=new J(x),this.ns=new tr(e=>eX(e),eJ),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rf(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ts))}}async function rb(e,t){return await e.persistence.runTransaction("Handle user change","readonly",r=>{let n;return e.mutationQueue.getAllMutationBatches(r).next(i=>(n=i,e.os(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let i=[],s=[],a=tl();for(let e of n)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(r,a).next(e=>({_s:e,removedBatchIds:i,addedBatchIds:s}))})})}function rk(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.qr.getLastRemoteSnapshotVersion(t))}async function rR(e,t,r){let n=e.ts.get(t);try{r||await e.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,n))}catch(e){if(!Q(e))throw e;g("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}e.ts=e.ts.remove(t),e.ns.delete(n.target)}function rx(e,t,r){let n=O.min(),i=tl();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,r){let n=e.ns.get(r);return void 0!==n?K.resolve(e.ts.get(n)):e.qr.getTargetData(t,r)})(e,s,e3(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.qr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.es.getDocumentsMatchingQuery(s,t,r?n:O.min(),r?i:tl())).next(r=>{var n;let s;return n=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.rs.get(n)||O.min(),r.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.rs.set(n,s),{documents:r,ls:i}}))}class rL{constructor(){this.activeTargetIds=tu}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class rV{constructor(){this.eo=new rL,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,t,r){this.no[e]=t}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new rL,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.ao))e(0)}_o(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.ao))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rF=null;function rP(){return null===rF?rF=268435456+Math.round(2147483648*Math.random()):rF++,"0x"+rF.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rU={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rq{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rB="WebChannelConnection";class r$ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.mo=t+"://"+e.host,this.fo=`projects/${r}/databases/${n}`,this.po="(default)"===this.databaseId.database?`project_id=${r}`:`project_id=${r}&database_id=${n}`}get yo(){return!1}wo(e,t,r,n,i){let s=rP(),a=this.So(e,t);g("RestConnection",`Sending RPC '${e}' ${s}:`,a,r);let o={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(o,n,i),this.Do(e,a,o,r).then(t=>(g("RestConnection",`Received RPC '${e}' ${s}: `,t),t),t=>{throw y("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",r),t})}Co(e,t,r,n,i,s){return this.wo(e,t,r,n,i)}bo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+d}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}So(e,t){let r=rU[e];return`${this.mo}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,t,r,n){let i=rP();return new Promise((s,a)=>{let o=new u.JJ;o.setWithCredentials(!0),o.listenOnce(u.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case u.jK.NO_ERROR:let t=o.getResponseJson();g(rB,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case u.jK.TIMEOUT:g(rB,`RPC '${e}' ${i} timed out`),a(new E(_.DEADLINE_EXCEEDED,"Request time out"));break;case u.jK.HTTP_ERROR:let r=o.getStatus();if(g(rB,`RPC '${e}' ${i} failed with status:`,r,"response text:",o.getResponseText()),r>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(t)>=0?t:_.UNKNOWN}(t.status);a(new E(e,t.message))}else a(new E(_.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new E(_.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{g(rB,`RPC '${e}' ${i} completed.`)}});let l=JSON.stringify(n);g(rB,`RPC '${e}' ${i} sending request:`,n),o.send(t,"POST",l,r,15)})}vo(e,t,r){let i=rP(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,u.UE)(),o=(0,u.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;void 0!==h&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;let c=s.join("");g(rB,`Creating RPC '${e}' stream ${i}: ${c}`,l);let d=a.createWebChannel(c,l),f=!1,m=!1,p=new rq({co:t=>{m?g(rB,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(f||(g(rB,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),g(rB,`RPC '${e}' stream ${i} sending:`,t),d.send(t))},lo:()=>d.close()}),w=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};return w(d,u.ii.EventType.OPEN,()=>{m||g(rB,`RPC '${e}' stream ${i} transport opened.`)}),w(d,u.ii.EventType.CLOSE,()=>{m||(m=!0,g(rB,`RPC '${e}' stream ${i} transport closed`),p.Ro())}),w(d,u.ii.EventType.ERROR,t=>{m||(m=!0,y(rB,`RPC '${e}' stream ${i} transport errored:`,t),p.Ro(new E(_.UNAVAILABLE,"The operation could not be completed")))}),w(d,u.ii.EventType.MESSAGE,t=>{var r;if(!m){let s=t.data[0];s||v();let a=s.error||(null===(r=s[0])||void 0===r?void 0:r.error);if(a){g(rB,`RPC '${e}' stream ${i} received error:`,a);let t=a.status,r=function(e){let t=n[e];if(void 0!==t)return tM(t)}(t),s=a.message;void 0===r&&(r=_.INTERNAL,s="Unknown error status: "+t+" with message "+a.message),m=!0,p.Ro(new E(r,s)),d.close()}else g(rB,`RPC '${e}' stream ${i} received:`,s),p.Vo(s)}}),w(o,u.ju.STAT_EVENT,t=>{t.stat===u.kN.PROXY?g(rB,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===u.kN.NOPROXY&&g(rB,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{p.Ao()},0),p}}function rz(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rG(e){return new t0(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rK{constructor(e,t,r=1e3,n=1.5,i=6e4){this.si=e,this.timerId=t,this.Fo=r,this.Mo=n,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();let t=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),n=Math.max(0,t-r);n>0&&g("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.Oo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,n,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){null!==this.No&&(this.No.skipDelay(),this.No=null)}cancel(){null!==this.No&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rQ{constructor(e,t,r,n,i,s,a,o){this.si=e,this.Ko=r,this.$o=n,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new rK(e,t)}jo(){return 1===this.state||5===this.state||this.Ho()}Ho(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&null===this.Wo&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,t){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,4!==e?this.zo.reset():t&&t.code===_.RESOURCE_EXHAUSTED?(p(t.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):t&&t.code===_.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(t)}r_(){}auth(){this.state=1;let e=this.i_(this.Uo),t=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.Uo===t&&this.s_(e,r)},t=>{e(()=>{let e=new E(_.UNKNOWN,"Fetching auth token failed: "+t.message);return this.o_(e)})})}s_(e,t){let r=this.i_(this.Uo);this.stream=this.__(e,t),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(e=>{r(()=>this.o_(e))}),this.stream.onMessage(e=>{r(()=>this.onMessage(e))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return g("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return t=>{this.si.enqueueAndForget(()=>this.Uo===e?t():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rj extends rQ{constructor(e,t,r,n,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}__(e,t){return this.connection.vo("Listen",e,t)}onMessage(e){this.zo.reset();let t=function(e,t){let r;if("targetChange"in t){var n,i;t.targetChange;let s="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:v(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||v(),es.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||v(),es.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;r=new tQ(s,a,o,l&&new E(void 0===l.code?_.UNKNOWN:tM(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let i=t6(e,n.document.name),s=t3(n.document.updateTime),a=n.document.createTime?t3(n.document.createTime):O.min(),o=new ek({mapValue:{fields:n.document.fields}}),l=eR.newFoundDocument(i,s,a,o);r=new tG(n.targetIds||[],n.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let i=t6(e,n.document),s=n.readTime?t3(n.readTime):O.min(),a=eR.newNoDocument(i,s);r=new tG([],n.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let i=t6(e,n.document);r=new tG([],n.removedTargetIds||[],i,null)}else{if(!("filter"in t))return v();{t.filter;let e=t.filter;e.targetId;let{count:n=0,unchangedNames:i}=e,s=new tO(n,i);r=new tK(e.targetId,s)}}return r}(this.serializer,e),r=function(e){if(!("targetChange"in e))return O.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?O.min():t.readTime?t3(t.readTime):O.min()}(e);return this.listener.a_(t,r)}u_(e){let t={};t.database=t7(this.serializer),t.addTarget=function(e,t){let r;let n=t.target;if((r=eZ(n)?{documents:{documents:[t5(e,n.path)]}}:{query:function(e,t){var r,n;let i={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(i.parent=t5(e,s),i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i.parent=t5(e,s.popLast()),i.structuredQuery.from=[{collectionId:s.lastSegment()}]);let a=function(e){if(0!==e.length)return function e(t){return t instanceof eF?function(e){if("=="===e.op){if(eS(e.value))return{unaryFilter:{field:rt(e.field),op:"IS_NAN"}};if(eA(e.value))return{unaryFilter:{field:rt(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(eS(e.value))return{unaryFilter:{field:rt(e.field),op:"IS_NOT_NAN"}};if(eA(e.value))return{unaryFilter:{field:rt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rt(e.field),op:tJ[e.op],value:e.value}}}(t):t instanceof eP?function(t){let r=t.getFilters().map(t=>e(t));return 1===r.length?r[0]:{compositeFilter:{op:tZ[t.op],filters:r}}}(t):v()}(eP.create(e,"and"))}(t.filters);a&&(i.structuredQuery.where=a);let o=function(e){if(0!==e.length)return e.map(e=>({field:rt(e.field),direction:tX[e.dir]}))}(t.orderBy);o&&(i.structuredQuery.orderBy=o);let l=t1(e,t.limit);return null!==l&&(i.structuredQuery.limit=l),t.startAt&&(i.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(i.structuredQuery.endAt={before:!(n=t.endAt).inclusive,values:n.position}),i}(e,n)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){r.resumeToken=t4(e,t.resumeToken);let n=t1(e,t.expectedCount);null!==n&&(r.expectedCount=n)}else if(t.snapshotVersion.compareTo(O.min())>0){r.readTime=t2(e,t.snapshotVersion.toTimestamp());let n=t1(e,t.expectedCount);null!==n&&(r.expectedCount=n)}return r}(this.serializer,e);let r=function(e,t){let r=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return v()}}(t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.serializer,e);r&&(t.labels=r),this.e_(t)}c_(e){let t={};t.database=t7(this.serializer),t.removeTarget=e,this.e_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rH extends class{}{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.d_=!1}A_(){if(this.d_)throw new E(_.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,t,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,i])=>this.connection.wo(e,t,r,n,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(_.UNKNOWN,e.toString())})}Co(e,t,r,n){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Co(e,t,r,i,s,n)).catch(e=>{throw"FirebaseError"===e.name?(e.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(_.UNKNOWN,e.toString())})}terminate(){this.d_=!0}}class rW{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){0===this.V_&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){"Online"===this.state?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,"Online"===e&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(p(t),this.f_=!1):g("OnlineStateTracker",t)}S_(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rY{constructor(e,t,r,n,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(e=>{r.enqueueAndForget(async()=>{r9(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.C_.add(4),await rJ(e),e.M_.set("Unknown"),e.C_.delete(4),await rX(e)}(this))})}),this.M_=new rW(r,n)}}async function rX(e){if(r9(e))for(let t of e.v_)await t(!0)}async function rJ(e){for(let t of e.v_)await t(!1)}function rZ(e,t){e.D_.has(t.targetId)||(e.D_.set(t.targetId,t),r3(e)?r4(e):nr(e).Ho()&&r1(e,t))}function r0(e,t){let r=nr(e);e.D_.delete(t),r.Ho()&&r2(e,t),0===e.D_.size&&(r.Ho()?r.Zo():r9(e)&&e.M_.set("Unknown"))}function r1(e,t){if(e.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(O.min())>0){let r=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}nr(e).u_(t)}function r2(e,t){e.x_.Oe(t),nr(e).c_(t)}function r4(e){e.x_=new tH({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.D_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),nr(e).start(),e.M_.g_()}function r3(e){return r9(e)&&!nr(e).jo()&&e.D_.size>0}function r9(e){return 0===e.C_.size}async function r8(e){e.D_.forEach((t,r)=>{r1(e,t)})}async function r6(e,t){e.x_=void 0,r3(e)?(e.M_.w_(t),r4(e)):e.M_.set("Unknown")}async function r5(e,t,r){if(e.M_.set("Online"),t instanceof tQ&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.D_.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.D_.delete(n),e.x_.removeTarget(n))}(e,t)}catch(r){g("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await r7(e,r)}else if(t instanceof tG?e.x_.$e(t):t instanceof tK?e.x_.Je(t):e.x_.Ge(t),!r.isEqual(O.min()))try{let t=await rk(e.localStore);r.compareTo(t)>=0&&await function(e,t){let r=e.x_.it(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let i=e.D_.get(n);i&&e.D_.set(n,i.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach((t,r)=>{let n=e.D_.get(t);if(!n)return;e.D_.set(t,n.withResumeToken(es.EMPTY_BYTE_STRING,n.snapshotVersion)),r2(e,t);let i=new ri(n.target,t,r,n.sequenceNumber);r1(e,i)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){g("RemoteStore","Failed to raise snapshot:",t),await r7(e,t)}}async function r7(e,t,r){if(!Q(t))throw t;e.C_.add(1),await rJ(e),e.M_.set("Offline"),r||(r=()=>rk(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{g("RemoteStore","Retrying IndexedDB access"),await r(),e.C_.delete(1),await rX(e)})}async function ne(e,t){e.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");let r=r9(e);e.C_.add(3),await rJ(e),r&&e.M_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.C_.delete(3),await rX(e)}async function nt(e,t){t?(e.C_.delete(2),await rX(e)):t||(e.C_.add(2),await rJ(e),e.M_.set("Unknown"))}function nr(e){var t,r,n;return e.O_||(e.O_=(t=e.datastore,r=e.asyncQueue,n={ho:r8.bind(null,e),Io:r6.bind(null,e),a_:r5.bind(null,e)},t.A_(),new rj(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.v_.push(async t=>{t?(e.O_.Yo(),r3(e)?r4(e):e.M_.set("Unknown")):(await e.O_.stop(),e.x_=void 0)})),e.O_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,t,r,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=i,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,n,i){let s=new nn(e,t,Date.now()+r,n,i);return s.start(r),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ni(e,t){if(p("AsyncQueue",`${t}: ${e}`),Q(e))return new E(_.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.comparator=e?(t,r)=>e(t,r)||q.comparator(t.key,r.key):(e,t)=>q.comparator(e.key,t.key),this.keyedMap=ts(),this.sortedSet=new J(this.comparator)}static emptySet(e){return new ns(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ns)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new ns;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(){this.B_=new J(q.comparator)}track(e){let t=e.doc.key,r=this.B_.get(t);r?0!==e.type&&3===r.type?this.B_=this.B_.insert(t,e):3===e.type&&1!==r.type?this.B_=this.B_.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.B_=this.B_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.B_=this.B_.remove(t):1===e.type&&2===r.type?this.B_=this.B_.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.B_=this.B_.insert(t,{type:2,doc:e.doc}):v():this.B_=this.B_.insert(t,e)}L_(){let e=[];return this.B_.inorderTraversal((t,r)=>{e.push(r)}),e}}class no{constructor(e,t,r,n,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new no(e,t,ns.emptySet(t),s,r,n,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&e6(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.k_=void 0,this.listeners=[]}}class nu{constructor(){this.queries=new tr(e=>e5(e),e6),this.onlineState="Unknown",this.q_=new Set}}async function nh(e,t){let r=t.query,n=!1,i=e.queries.get(r);if(i||(n=!0,i=new nl),n)try{i.k_=await e.onListen(r)}catch(r){let e=ni(r,`Initialization of query '${e7(t.query)}' failed`);return void t.onError(e)}e.queries.set(r,i),i.listeners.push(t),t.Q_(e.onlineState),i.k_&&t.K_(i.k_)&&nm(e)}async function nc(e,t){let r=t.query,n=!1,i=e.queries.get(r);if(i){let e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),n=0===i.listeners.length)}if(n)return e.queries.delete(r),e.onUnlisten(r)}function nd(e,t){let r=!1;for(let n of t){let t=n.query,i=e.queries.get(t);if(i){for(let e of i.listeners)e.K_(n)&&(r=!0);i.k_=n}}r&&nm(e)}function nf(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.listeners)e.onError(r);e.queries.delete(t)}function nm(e){e.q_.forEach(e=>{e.next()})}class ng{constructor(e,t,r){this.query=e,this.U_=t,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new no(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.W_?this.z_(e)&&(this.U_.next(e),t=!0):this.j_(e,this.onlineState)&&(this.H_(e),t=!0),this.G_=e,t}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let t=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),t=!0),t}j_(e,t){return!e.fromCache||(!this.options.J_||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}z_(e){if(e.docChanges.length>0)return!0;let t=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}H_(e){e=no.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.key=e}}class ny{constructor(e){this.key=e}}class nw{constructor(e,t){this.query=e,this.ia=t,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=tl(),this.mutatedKeys=tl(),this._a=tt(e),this.aa=new ns(this._a)}get ua(){return this.ia}ca(e,t){let r=t?t.la:new na,n=t?t.aa:this.aa,i=t?t.mutatedKeys:this.mutatedKeys,s=n,a=!1,o="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let u=n.get(e),h=te(this.query,t)?t:null,c=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations),f=!1;u&&h?u.data.isEqual(h.data)?c!==d&&(r.track({type:3,doc:h}),f=!0):this.ha(u,h)||(r.track({type:2,doc:h}),f=!0,(o&&this._a(h,o)>0||l&&0>this._a(h,l))&&(a=!0)):!u&&h?(r.track({type:0,doc:h}),f=!0):u&&!h&&(r.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(h?(s=s.add(h),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),r.track({type:1,doc:e})}return{aa:s,la:r,Zi:a,mutatedKeys:i}}ha(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,n){let i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;let s=e.la.L_();s.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return r(e)-r(t)})(e.type,t.type)||this._a(e.doc,t.doc)),this.Pa(r),n=null!=n&&n;let a=t&&!n?this.Ia():[],o=0===this.oa.size&&this.current&&!n?1:0,l=o!==this.sa;return(this.sa=o,0!==s.length||l)?{snapshot:new no(this.query,e.aa,i,s,e.mutatedKeys,0===o,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({aa:this.aa,la:new na,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(e=>this.ia=this.ia.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.ia=this.ia.delete(e)),this.current=e.current)}Ia(){if(!this.current)return[];let e=this.oa;this.oa=tl(),this.aa.forEach(e=>{this.Ea(e.key)&&(this.oa=this.oa.add(e.key))});let t=[];return e.forEach(e=>{this.oa.has(e)||t.push(new ny(e))}),this.oa.forEach(r=>{e.has(r)||t.push(new np(r))}),t}da(e){this.ia=e.ls,this.oa=tl();let t=this.ca(e.documents);return this.applyChanges(t,!0)}Aa(){return no.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,0===this.sa,this.hasCachedResults)}}class nv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class n_{constructor(e){this.key=e,this.Ra=!1}}class nE{constructor(e,t,r,n,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Va={},this.ma=new tr(e=>e5(e),e6),this.fa=new Map,this.ga=new Set,this.pa=new J(q.comparator),this.ya=new Map,this.wa=new rp,this.Sa={},this.ba=new Map,this.Da=rh.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return!0===this.Ca}}async function nT(e,t){var r,n;let i,s;let a=(e.remoteStore.remoteSyncer.applyRemoteEvent=nA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nN.bind(null,e),e.Va.a_=nd.bind(null,e.eventManager),e.Va.Fa=nf.bind(null,e.eventManager),e),o=a.ma.get(t);if(o)i=o.targetId,a.sharedClientState.addLocalQueryTarget(i),s=o.view.Aa();else{let e=await (r=a.localStore,n=e3(t),r.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return r.qr.getTargetData(e,n).next(i=>i?(t=i,K.resolve(t)):r.qr.allocateTargetId(e).next(i=>(t=new ri(n,i,"TargetPurposeListen",e.currentSequenceNumber),r.qr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=r.ts.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(r.ts=r.ts.insert(e.targetId,e),r.ns.set(n,e.targetId)),e})),o=a.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await nI(a,t,i,"current"===o,e.resumeToken),a.isPrimaryClient&&rZ(a.remoteStore,e)}return s}async function nI(e,t,r,n,i){e.va=(t,r,n)=>(async function(e,t,r,n){let i=t.view.ca(r);i.Zi&&(i=await rx(e.localStore,t.query,!1).then(({documents:e})=>t.view.ca(e,i)));let s=n&&n.targetChanges.get(t.targetId),a=n&&null!=n.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return nk(e,t.targetId,o.Ta),o.snapshot})(e,t,r,n);let s=await rx(e.localStore,t,!0),a=new nw(t,s.ls),o=a.ca(s.documents),l=tz.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);nk(e,r,u.Ta);let h=new nv(t,r,a);return e.ma.set(t,h),e.fa.has(r)?e.fa.get(r).push(t):e.fa.set(r,[t]),u.snapshot}async function nC(e,t){let r=e.ma.get(t),n=e.fa.get(r.targetId);if(n.length>1)return e.fa.set(r.targetId,n.filter(e=>!e6(e,t))),void e.ma.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await rR(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),r0(e.remoteStore,r.targetId),nD(e,r.targetId)}).catch(G)):(nD(e,r.targetId),await rR(e.localStore,r.targetId,!0))}async function nA(e,t){try{let r=await function(e,t){let r=t.snapshotVersion,n=e.ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e.ss.newChangeBuffer({trackRemovals:!0});n=e.ts;let u=[];t.targetChanges.forEach((s,a)=>{var o;let l=n.get(a);if(!l)return;u.push(e.qr.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.qr.addMatchingKeys(i,s.addedDocuments,a)));let h=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?h=h.withResumeToken(es.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):s.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(s.resumeToken,r)),n=n.insert(a,h),o=h,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.qr.updateTargetData(i,h))});let h=tn,c=tl();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,r))}),u.push((s=t.documentUpdates,a=tl(),o=tl(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=tn;return s.forEach((r,n)=>{let i=e.get(r);n.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(r)),n.isNoDocument()&&n.version.isEqual(O.min())?(l.removeEntry(r,n.readTime),t=t.insert(r,n)):!i.isValidDocument()||n.version.compareTo(i.version)>0||0===n.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(n),t=t.insert(r,n)):g("LocalStore","Ignoring outdated watch update for ",r,". Current version:",i.version," Watch version:",n.version)}),{us:t,cs:o}})).next(e=>{h=e.us,c=e.cs})),!r.isEqual(O.min())){let t=e.qr.getLastRemoteSnapshotVersion(i).next(t=>e.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));u.push(t)}return K.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,h,c)).next(()=>h)}).then(t=>(e.ts=n,t))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{let n=e.ya.get(r);n&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||v(),t.addedDocuments.size>0?n.Ra=!0:t.modifiedDocuments.size>0?n.Ra||v():t.removedDocuments.size>0&&(n.Ra||v(),n.Ra=!1))}),await nx(e,r,t)}catch(e){await G(e)}}function nS(e,t,r){var n;if(e.isPrimaryClient&&0===r||!e.isPrimaryClient&&1===r){let r;let i=[];e.ma.forEach((e,r)=>{let n=r.view.Q_(t);n.snapshot&&i.push(n.snapshot)}),(n=e.eventManager).onlineState=t,r=!1,n.queries.forEach((e,n)=>{for(let e of n.listeners)e.Q_(t)&&(r=!0)}),r&&nm(n),i.length&&e.Va.a_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function nN(e,t,r){e.sharedClientState.updateQueryState(t,"rejected",r);let n=e.ya.get(t),i=n&&n.key;if(i){let r=new J(q.comparator);r=r.insert(i,eR.newNoDocument(i,O.min()));let n=tl().add(i),s=new t$(O.min(),new Map,new J(x),r,n);await nA(e,s),e.pa=e.pa.remove(i),e.ya.delete(t),nR(e)}else await rR(e.localStore,t,!1).then(()=>nD(e,t,r)).catch(G)}function nD(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.fa.get(t)))e.ma.delete(n),r&&e.Va.Fa(n,r);e.fa.delete(t),e.isPrimaryClient&&e.wa.Rr(t).forEach(t=>{e.wa.containsKey(t)||nb(e,t)})}function nb(e,t){e.ga.delete(t.path.canonicalString());let r=e.pa.get(t);null!==r&&(r0(e.remoteStore,r),e.pa=e.pa.remove(t),e.ya.delete(r),nR(e))}function nk(e,t,r){for(let n of r)n instanceof np?(e.wa.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.pa.get(r)||e.ga.has(n)||(g("SyncEngine","New document in limbo: "+r),e.ga.add(n),nR(e))}(e,n)):n instanceof ny?(g("SyncEngine","Document no longer in limbo: "+n.key),e.wa.removeReference(n.key,t),e.wa.containsKey(n.key)||nb(e,n.key)):v()}function nR(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){let t=e.ga.values().next().value;e.ga.delete(t);let r=new q(F.fromString(t)),n=e.Da.next();e.ya.set(n,new n_(r)),e.pa=e.pa.insert(r,n),rZ(e.remoteStore,new ri(e3(new e0(r.path)),n,"TargetPurposeLimboResolution",j._e))}}async function nx(e,t,r){let n=[],i=[],s=[];e.ma.isEmpty()||(e.ma.forEach((a,o)=>{s.push(e.va(o,t,r).then(t=>{if((t||r)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){n.push(t);let e=rA.Qi(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.Va.a_(n),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",r=>K.forEach(t,t=>K.forEach(t.ki,n=>e.persistence.referenceDelegate.addReference(r,t.targetId,n)).next(()=>K.forEach(t.qi,n=>e.persistence.referenceDelegate.removeReference(r,t.targetId,n)))))}catch(e){if(!Q(e))throw e;g("LocalStore","Failed to update sequence numbers: "+e)}for(let r of t){let t=r.targetId;if(!r.fromCache){let r=e.ts.get(t),n=r.snapshotVersion,i=r.withLastLimboFreeSnapshotVersion(n);e.ts=e.ts.insert(t,i)}}}(e.localStore,i))}async function nL(e,t){if(!e.currentUser.isEqual(t)){g("SyncEngine","User change. New user:",t.toKey());let r=await rb(e.localStore,t);e.currentUser=t,e.ba.forEach(e=>{e.forEach(e=>{e.reject(new E(_.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.ba.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await nx(e,r._s)}}function nV(e,t){let r=e.ya.get(t);if(r&&r.Ra)return tl().add(r.key);{let r=tl(),n=e.fa.get(t);if(!n)return r;for(let t of n){let n=e.ma.get(t);r=r.unionWith(n.view.ua)}return r}}class nO{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=rG(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t;return t=this.persistence,new rD(t,new rN,e.initialUser,this.serializer)}createPersistence(e){return new rT(rC.jr,this.serializer)}createSharedClientState(e){return new rV}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nM{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>nS(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=nL.bind(null,this.syncEngine),await nt(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new nu}createDatastore(e){let t=rG(e.databaseInfo.databaseId),r=new r$(e.databaseInfo);return new rH(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){var t;return t=this.localStore,new rY(t,this.datastore,e.asyncQueue,e=>nS(this.syncEngine,e,0),rM.D()?new rM:new rO)}createSyncEngine(e,t){return function(e,t,r,n,i,s,a){let o=new nE(e,t,r,n,i,s);return a&&(o.Ca=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){g("RemoteStore","RemoteStore shutting down."),e.C_.add(5),await rJ(e),e.F_.shutdown(),e.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):p("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,t,r,n){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=c.UNAUTHENTICATED,this.clientId=R.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async e=>{g("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(g("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=ni(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function nU(e,t){e.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");let r=await e.getConfiguration();await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await rb(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function nq(e,t){e.asyncQueue.verifyOperationInProgress();let r=await nB(e);g("FirestoreClient","Initializing OnlineComponentProvider");let n=await e.getConfiguration();await t.initialize(r,n),e.setCredentialChangeListener(e=>ne(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>ne(t.remoteStore,r)),e._onlineComponents=t}async function nB(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){g("FirestoreClient","Using user provided OfflineComponentProvider");try{await nU(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===_.FAILED_PRECONDITION||t.code===_.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;y("Error using user provided cache. Falling back to memory cache: "+t),await nU(e,new nO)}}else g("FirestoreClient","Using default OfflineComponentProvider"),await nU(e,new nO)}return e._offlineComponents}async function n$(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(g("FirestoreClient","Using user provided OnlineComponentProvider"),await nq(e,e._uninitializedComponentsProvider._online)):(g("FirestoreClient","Using default OnlineComponentProvider"),await nq(e,new nM))),e._onlineComponents}async function nz(e){let t=await n$(e),r=t.eventManager;return r.onListen=nT.bind(null,t.syncEngine),r.onUnlisten=nC.bind(null,t.syncEngine),r}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nG(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nK=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nQ(e,t,r){if(!r)throw new E(_.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function nj(e){if(!q.isDocumentKey(e))throw new E(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function nH(e){if(q.isDocumentKey(e))throw new E(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function nW(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":v()}function nY(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=nW(e);throw new E(_.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nX{constructor(e){var t,r;if(void 0===e.host){if(void 0!==e.ssl)throw new E(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new E(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,r,n){if(!0===t&&!0===n)throw new E(_.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nG(null!==(r=e.experimentalLongPollingOptions)&&void 0!==r?r:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new E(_.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new E(_.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new E(_.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,r;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class nJ{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nX({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new E(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nX(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new C;switch(e.type){case"firstParty":return new D(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new E(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=nK.get(e);t&&(g("ComponentProvider","Removing Datastore"),nK.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nZ{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new nZ(this.firestore,e,this._query)}}class n0{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new n1(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new n0(this.firestore,e,this._key)}}class n1 extends nZ{constructor(e,t,r){super(e,t,new e0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new n0(this.firestore,null,new q(e))}withConverter(e){return new n1(this.firestore,e,this._path)}}function n2(e,t,...r){if(e=(0,l.m9)(e),nQ("collection","path",t),e instanceof nJ){let n=F.fromString(t,...r);return nH(n),new n1(e,null,n)}{if(!(e instanceof n0||e instanceof n1))throw new E(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(F.fromString(t,...r));return nH(n),new n1(e.firestore,null,n)}}function n4(e,t,...r){if(e=(0,l.m9)(e),1==arguments.length&&(t=R.newId()),nQ("doc","path",t),e instanceof nJ){let n=F.fromString(t,...r);return nj(n),new n0(e,null,new q(n))}{if(!(e instanceof n0||e instanceof n1))throw new E(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(F.fromString(t,...r));return nj(n),new n0(e.firestore,e instanceof n1?e.converter:null,new q(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n3{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new rK(this,"async_queue_retry"),this.iu=()=>{let e=rz();e&&g("AsyncQueue","Visibility state changed to "+e.visibilityState),this.zo.Qo()};let e=rz();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;let t=rz();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});let t=new T;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(0!==this.Ya.length){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Q(e))throw e;g("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){let t=this.Ja.then(()=>(this.tu=!0,e().catch(e=>{let t;throw this.eu=e,this.tu=!1,p("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.tu=!1,e))));return this.Ja=t,t}enqueueAfterDelay(e,t,r){this.su(),this.ru.indexOf(e)>-1&&(t=0);let n=nn.createAndSchedule(this,e,t,r,e=>this.au(e));return this.Xa.push(n),n}su(){this.eu&&v()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(let t of this.Xa)if(t.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{for(let t of(this.Xa.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.Xa))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){let t=this.Xa.indexOf(e);this.Xa.splice(t,1)}}class n9 extends nJ{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new n3,this._persistenceKey=(null==n?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||n5(this),this._firestoreClient.terminate()}}function n8(e,t){let r="object"==typeof e?e:(0,s.Mq)(),n=(0,s.qX)(r,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!n._initialized){let e=(0,l.P0)("firestore");e&&function(e,t,r,n={}){var i;let s=(e=nY(e,nJ))._getSettings(),a=`${t}:${r}`;if("firestore.googleapis.com"!==s.host&&s.host!==a&&y("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),n.mockUserToken){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=c.MOCK_USER;else{t=(0,l.Sg)(n.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);let s=n.mockUserToken.sub||n.mockUserToken.user_id;if(!s)throw new E(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new c(s)}e._authCredentials=new A(new I(t,r))}}(n,...e)}return n}function n6(e){return e._firestoreClient||n5(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function n5(e){var t,r,n,i;let s=e._freezeSettings(),a=(i=e._databaseId,new ef(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,nG(s.experimentalLongPollingOptions),s.useFetchStreams));e._firestoreClient=new nP(e._authCredentials,e._appCheckCredentials,e._queue,a),(null===(r=s.localCache)||void 0===r?void 0:r._offlineComponentProvider)&&(null===(n=s.localCache)||void 0===n?void 0:n._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n7{constructor(e){this._byteString=e}static fromBase64String(e){try{return new n7(es.fromBase64String(e))}catch(e){throw new E(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new n7(es.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new E(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new U(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new E(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new E(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return x(this._lat,e._lat)||x(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ii=/^__.*__$/;function is(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class ia{constructor(e,t,r,n,i,s){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,void 0===i&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new ia(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.Tu({path:r,du:!1});return n.Au(e),n}Ru(e){var t;let r=null===(t=this.path)||void 0===t?void 0:t.child(e),n=this.Tu({path:r,du:!1});return n.Pu(),n}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return id(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(0===e.length)throw this.mu("Document fields must not be empty");if(is(this.Iu)&&ii.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class io{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||rG(e)}pu(e,t,r,n=!1){return new ia({Iu:e,methodName:t,gu:r,path:U.emptyPath(),du:!1,fu:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function il(e){let t=e._freezeSettings(),r=rG(e._databaseId);return new io(e._databaseId,!!t.ignoreUndefinedProperties,r)}function iu(e,t,r,n=!1){return function e(t,r){if(ih(t=(0,l.m9)(t)))return function(e,t,r){if(!ih(r)||!("object"==typeof r&&null!==r&&(Object.getPrototypeOf(r)===Object.prototype||null===Object.getPrototypeOf(r)))){let n=nW(r);throw"an object"===n?t.mu(e+" a custom object"):t.mu(e+" "+n)}}("Unsupported field value:",r,t),function(t,r){let n={};return X(t)?r.path&&r.path.length>0&&r.fieldMask.push(r.path):Y(t,(t,i)=>{let s=e(i,r.Eu(t));null!=s&&(n[t]=s)}),{mapValue:{fields:n}}}(t,r);if(t instanceof it)return function(e,t){if(!is(t.Iu))throw t.mu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.mu(`${e._methodName}() is not currently supported inside arrays`);let r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(t,r),null;if(void 0===t&&r.ignoreUndefinedProperties)return null;if(r.path&&r.fieldMask.push(r.path),t instanceof Array){if(r.settings.du&&4!==r.Iu)throw r.mu("Nested arrays are not supported");return function(t,r){let n=[],i=0;for(let s of t){let t=e(s,r.Vu(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,r)}return function(e,t){if(null===(e=(0,l.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var r,n,i;return r=t.serializer,"number"==typeof(i=n=e)&&Number.isInteger(i)&&!H(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?tc(n):th(r,n)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let r=V.fromDate(e);return{timestampValue:t2(t.serializer,r)}}if(e instanceof V){let r=new V(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:t2(t.serializer,r)}}if(e instanceof ir)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof n7)return{bytesValue:t4(t.serializer,e._byteString)};if(e instanceof n0){let r=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(r))throw t.mu(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:t9(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.mu(`Unsupported field value: ${nW(e)}`)}(t,r)}(r,e.pu(n?4:3,t))}function ih(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof V||e instanceof ir||e instanceof n7||e instanceof n0||e instanceof it)}let ic=RegExp("[~\\*/\\[\\]]");function id(e,t,r,n,i){let s=n&&!n.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;r&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${n}`),a&&(l+=` in document ${i}`),l+=")"),new E(_.INVALID_ARGUMENT,o+e+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,t,r,n,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new n0(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new ig(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(ip("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class ig extends im{data(){return super.data()}}function ip(e,t){return"string"==typeof t?function(e,t,r){if(t.search(ic)>=0)throw id(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new ie(...t.split("."))._internalPath}catch(n){throw id(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}(e,t):t instanceof ie?t._internalPath:t._delegate._internalPath}class iy{}class iw extends iy{}function iv(e,t,...r){let n=[];for(let i of(t instanceof iy&&n.push(t),function(e){let t=e.filter(e=>e instanceof iT).length,r=e.filter(e=>e instanceof i_).length;if(t>1||t>0&&r>0)throw new E(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n=n.concat(r)),n))e=i._apply(e);return e}class i_ extends iw{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new i_(e,t,r)}_apply(e){let t=this._parse(e);return iR(e._query,t),new nZ(e.firestore,e.converter,e9(e._query,t))}_parse(e){let t=il(e.firestore);return function(e,t,r,n,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new E(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){ik(a,s);let t=[];for(let r of a)t.push(ib(n,e,r));o={arrayValue:{values:t}}}else o=ib(n,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||ik(a,s),o=iu(r,t,a,"in"===s||"not-in"===s);return eF.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function iE(e,t,r){let n=ip("where",e);return i_._create(n,t,r)}class iT extends iy{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new iT(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:eP.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let r=e;for(let e of t.getFlattenedFilters())iR(r,e),r=e9(r,e)}(e._query,t),new nZ(e.firestore,e.converter,e9(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class iI extends iw{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new iI(e,t)}_apply(e){let t=function(e,t,r){if(null!==e.startAt)throw new E(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new E(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new eO(t,r)}(e._query,this._field,this._direction);return new nZ(e.firestore,e.converter,function(e,t){let r=e.explicitOrderBy.concat([t]);return new e0(e.path,e.collectionGroup,r,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function iC(e,t="asc"){let r=ip("orderBy",e);return iI._create(r,t)}class iA extends iw{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new iA(e,t,r)}_apply(e){return new nZ(e.firestore,e.converter,e8(e._query,this._limit,this._limitType))}}function iS(e){return function(e,t){if(t<=0)throw new E(_.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}("limit",e),iA._create("limit",e,"F")}class iN extends iw{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new iN(e,t,r)}_apply(e){var t;let r=function(e,t,r,n){if(r[0]=(0,l.m9)(r[0]),r[0]instanceof im)return function(e,t,r,n,i){if(!n)throw new E(_.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${r}().`);let s=[];for(let r of e4(e))if(r.field.isKeyField())s.push(eT(t,n.key));else{let e=n.data.field(r.field);if(eh(e))throw new E(_.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+r.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){let e=r.field.canonicalString();throw new E(_.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new ex(s,i)}(e._query,e.firestore._databaseId,t,r[0]._document,n);{let i=il(e.firestore);return function(e,t,r,n,i,s){let a=e.explicitOrderBy;if(i.length>a.length)throw new E(_.INVALID_ARGUMENT,`Too many arguments provided to ${n}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);let o=[];for(let s=0;s<i.length;s++){let l=i[s];if(a[s].field.isKeyField()){if("string"!=typeof l)throw new E(_.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${n}(), but got a ${typeof l}`);if(!e2(e)&&-1!==l.indexOf("/"))throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${n}() must be a plain document ID, but '${l}' contains a slash.`);let r=e.path.child(F.fromString(l));if(!q.isDocumentKey(r))throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${n}() must result in a valid document path, but '${r}' is not because it contains an odd number of segments.`);let i=new q(r);o.push(eT(t,i))}else{let e=iu(r,n,l);o.push(e)}}return new ex(o,s)}(e._query,e.firestore._databaseId,i,t,r,n)}}(e,this.type,this._docOrFields,this._inclusive);return new nZ(e.firestore,e.converter,new e0((t=e._query).path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,r,t.endAt))}}function iD(...e){return iN._create("startAfter",e,!1)}function ib(e,t,r){if("string"==typeof(r=(0,l.m9)(r))){if(""===r)throw new E(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!e2(t)&&-1!==r.indexOf("/"))throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);let n=t.path.child(F.fromString(r));if(!q.isDocumentKey(n))throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return eT(e,new q(n))}if(r instanceof n0)return eT(e,r._key);throw new E(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${nW(r)}.`)}function ik(e,t){if(!Array.isArray(e)||0===e.length)throw new E(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function iR(e,t){let r=function(e,t){for(let r of e)for(let e of r.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==r)throw r===t.op?new E(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new E(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${r.toString()}' filters.`)}class ix{convertValue(e,t="none"){switch(ep(e)){case 0:return null;case 1:return e.booleanValue;case 2:return el(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(eu(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw v()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return Y(e,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertGeoPoint(e){return new ir(el(e.latitude),el(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=ec(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ed(e));default:return null}}convertTimestamp(e){let t=eo(e);return new V(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=F.fromString(e);rn(r)||v();let n=new em(r.get(1),r.get(3)),i=new q(r.popFirst(5));return n.isEqual(t)||p(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class iV extends im{constructor(e,t,r,n,i,s){super(e,t,r,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new iO(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(ip("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class iO extends iV{data(e={}){return super.data(e)}}class iM{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new iL(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new iO(this._firestore,this._userDataWriter,r.key,r,new iL(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new E(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{let n=new iO(e._firestore,e._userDataWriter,r.doc.key,r.doc,new iL(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new iO(e._firestore,e._userDataWriter,t.doc.key,t.doc,new iL(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iF(e){e=nY(e,n0);let t=nY(e.firestore,n9);return(function(e,t,r={}){let n=new T;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new nF({next:s=>{t.enqueueAndForget(()=>nc(e,a));let o=s.docs.has(r);!o&&s.fromCache?i.reject(new E(_.UNAVAILABLE,"Failed to get document because the client is offline.")):o&&s.fromCache&&n&&"server"===n.source?i.reject(new E(_.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),a=new ng(new e0(r.path),s,{includeMetadataChanges:!0,J_:!0});return nh(e,a)})(await nz(e),e.asyncQueue,t,r,n)),n.promise})(n6(t),e._key).then(r=>(function(e,t,r){let n=r.docs.get(t._key),i=new iP(e);return new iV(e,i,t._key,n,new iL(r.hasPendingWrites,r.fromCache),t.converter)})(t,e,r))}class iP extends ix{constructor(e){super(),this.firestore=e}convertBytes(e){return new n7(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new n0(this.firestore,null,t)}}function iU(e){e=nY(e,nZ);let t=nY(e.firestore,n9),r=n6(t),n=new iP(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new E(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,r={}){let n=new T;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new ng(r,new nF({next:r=>{t.enqueueAndForget(()=>nc(e,s)),r.fromCache&&"server"===n.source?i.reject(new E(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(r)},error:e=>i.reject(e)}),{includeMetadataChanges:!0,J_:!0});return nh(e,s)})(await nz(e),e.asyncQueue,t,r,n)),n.promise})(r,e._query).then(r=>new iM(t,n,e,r)))}new WeakMap,function(e=!0){d=s.Jn,(0,s.Xd)(new a.wA("firestore",(t,{instanceIdentifier:r,options:n})=>{let i=t.getProvider("app").getImmediate(),s=new n9(new S(t.getProvider("auth-internal")),new k(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new E(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new em(e.options.projectId,t)}(i,r),i);return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),(0,s.KN)(h,"4.4.0",void 0),(0,s.KN)(h,"4.4.0","esm2017")}()}}]);