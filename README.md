Usage example:

```
<div id="address_email">e-mail: </div>

<script type="text/javascript">
        $('#address_email').hideEmail('user', 'domain.com');
</script>
```

You can add optional third parameter.
Third parameter can be any HTML tag or any text. It just be surrounded by a:mailto tag.

```
<div id="address_email"></div>

<script type="text/javascript">
        $('#address_email').hideEmail('user', 'domain.com', '<img src="img_path/image.png" alt="Your image" />');
</script>
```
