let receiptService = (() => {
    
    function getActiveReceipt(userId) {
        console.log('here');
        const endpoint = `receipts?query={"_acl.creator":"${userId}","active":"true"}`;
        return remote.get('appdata', endpoint, 'kinvey');
    }
    
    function getEntriesByReceiptId(recepId) {
        const endpoint = `entries?query={"receiptId":"${recepId}"}`;
        return remote.get('appdata', endpoint, 'kinvey');
    }
    
    function createReceipt() {
        let data = {"active": true, "productCount": 0, "total": 0 };
        return remote.post('appdata', 'receipts', 'kinvey', data);
    }
    
    function addEntry(type, qty, price, receiptId) {
        let data = {type, qty, price, receiptId};
        return remote.post('appdata', 'entries', 'kinvey', data);
    }
    
    async function deleteEntry(entryId) {
        const endpoint = `entries/${entryId}`;
        return remote.remove('appdata', endpoint, 'kinvey');
    }
    
    function getMyReceipt(userId) {
        let endpoint = `receipts?query={"_acl.creator":"${userId}","active":"false"}`;
        return remote.get('appdata', endpoint, 'kinvey');
    }

    
    function commitReceipt(active, productCount, total, receiptId) {

        let data = {active, productCount, total};
        const endpoint = `receipts/${receiptId}`;
        return remote.update('appdata', endpoint, 'kinvey', data);
    }
    // function getAllPosts() {
    //     const endpoint = 'posts?query={}&sort={"_kmd.ect": -1}';
    //
    //     return remote.get('appdata', endpoint, 'kinvey');
    // }
    //
    // function createPost(author, title, description, url, imageUrl) {
    //     let data = { author, title, description, url, imageUrl };
    //
    //     return remote.post('appdata', 'posts', 'kinvey', data);
    // }
    //
    // function editPost(postId, author, title, description, url, imageUrl) {
    //     const endpoint = `posts/${postId}`;
    //     let data = { author, title, description, url, imageUrl };
    //
    //     return remote.update('appdata', endpoint, 'kinvey', data);
    // }
    //
    // function deletePost(postId) {
    //     const endpoint = `posts/${postId}`;
    //
    //     return remote.remove('appdata', endpoint, 'kinvey');
    // }
    //
    // function getMyPosts(username) {
    //     const endpoint = `posts?query={"author":"${username}"}&sort={"_kmd.ect": -1}`;
    //
    //     return remote.get('appdata', endpoint, 'kinvey');
    // }
    //
    // function getPostById(postId) {
    //     const endpoint = `posts/${postId}`;
    //
    //     return remote.get('appdata', endpoint, 'kinvey');
    // }

    return {
        getActiveReceipt,
        getEntriesByReceiptId,
        createReceipt,
        addEntry,
        deleteEntry,
        getMyReceipt,
        commitReceipt
    }
})();